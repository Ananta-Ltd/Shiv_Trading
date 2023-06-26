from fastapi import APIRouter,Depends,status,HTTPException
from sqlalchemy.orm import Session
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from db import model,schemas,dbconnect
from core import security,deps
from fastapi import File,UploadFile

import io

from .router_post import validate_photo

model.base.metadata.create_all(bind=dbconnect.engine)

router=APIRouter(tags=['Authentication'])


@router.post("/register/")
async def create_user(user_info:schemas.user_create,db:Session=Depends(dbconnect.get_database)):
    user=db.query(model.user).filter(model.user.email==user_info.email).first()
    if user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Email already registered")
    user = db.query(model.user).filter(model.user.phone_number == user_info.phone_number).first()
    if user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Phone number already registered")
    user=model.user(email=user_info.email,phone_number=user_info.phone_number,plan=user_info.plan,country_code=user_info.country_code,is_superuser=user_info.is_superuser)
    db.add(user)
    db.commit()
    db.refresh(user)
    id=db.query(model.user).filter(model.user.phone_number==user_info.phone_number).first()
    login=model.login(id=id.id,pasword=security.hash_password(user_info.password))
    db.add(login)
    db.commit()
    db.refresh(login)
    return {"User Created Successfully"}


@router.post("/login/",response_model=schemas.Token)
async def login(credentials:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(dbconnect.get_database)):
    user_by_email=db.query(model.user).filter(model.user.email==credentials.username).first()
    user_by_number=db.query(model.user).filter(model.user.phone_number==credentials.username).first()
    if not user_by_number and not user_by_email:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")
    user:model.user
    if user_by_number:
        user=user_by_number
    else:
        user=user_by_email
    login_user=db.query(model.login).filter(model.login.id==user.id and model.login.pasword==security.hash_password(credentials.password)).first()
    if not login_user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="Invalid Credentials")
    access_token=security.create_access_token(data={"id":login_user.id})
    return {"access_token":access_token,"token_type":"bearer"}


@router.patch("/update/plan/",dependencies=[Depends(deps.get_current_user)])
async def update_plan(plan:str,username:str,db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    user=db.query(model.user).filter(model.user.phone_number == user.phone_number).first()
    if plan!="basic" and plan!="" and user.is_superuser:
        user_by_phone=db.query(model.user).filter(model.user.phone_number==username).first()
        user_by_email=db.query(model.user).filter(model.user.email==username).first()
        if not user_by_phone and not user_by_email:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = "No such user exists")
        if user_by_phone:
            user=user_by_phone
        if user_by_email:
            user=user_by_email
        user.plan=plan
        db.commit()
        db.refresh(user)
        return "Plan updated successfully"
    else:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN,detail = "Only the owner can update the plan")


@router.patch("/upload/photo/",dependencies = [Depends(deps.get_current_user)])
async def upload_photo(photo:UploadFile=File(...),db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    validate_photo(photo)
    image_data = await photo.read()

    # Upload the image to ImageKit
    upload_response = imagekit.upload_file(
        file = io.BytesIO(image_data),
        file_name = photo.filename,
        options = { "folder": "/images/" }
    )
    # Get the URL of the uploaded image
    image_url = upload_response.get("response")
    image_url=image_url.get("url")

    return { "image_url": image_url }