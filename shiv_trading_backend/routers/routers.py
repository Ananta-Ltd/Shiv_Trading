from fastapi import APIRouter,Depends,status,HTTPException
from sqlalchemy.orm import Session
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from db import model,schemas,dbconnect
from core import security,deps
from typing import List
from fastapi import File,UploadFile

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
    user=model.user(email=user_info.email,phone_number=user_info.phone_number,plan=user_info.plan,country_code=user_info.country_code)
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
async def update_plan(plan:str,db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    user=db.query(model.user).filter(model.user.phone_number == user.phone_number).first()
    if plan!="basic" and plan!="":
        user.plan=plan
    db.commit()
    db.refresh(user)
    return "Plan updated successfully"


@router.post("/add/products/",dependencies=[Depends(deps.get_current_user)])
async def add_products(products:List[schemas.add_product],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
    for product in products:
        product=model.product(product_name=product.product_name)
        db.add(product)
        db.commit()
        db.refresh(product)
    return "Product Added"


@router.post("/add/sizes/",dependencies=[Depends(deps.get_current_user)])
async def add_sizes(size:List[schemas.add_size],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
    for s in size:
        sizes=model.size(sizes=s.sizes)
        db.add(sizes)
        db.commit()
        db.refresh(sizes)
    return "Sizes Added"


@router.post("/add/rooms/",dependencies=[Depends(deps.get_current_user)])
async def add_rooms(rooms:List[schemas.add_rooms],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
    for s in rooms:
        room=model.rooms(room_name=s.room_name)
        db.add(room)
        db.commit()
        db.refresh(room)
    return "Rooms Added"


@router.post("/add/cp/items/",dependencies=[Depends(deps.get_current_user)])
async def add_cp_items(fittings:List[schemas.add_cpfittings],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
    for s in fittings:
        fitting=model.cpfittings(fitting_name=s.fitting_name)
        db.add(fitting)
        db.commit()
        db.refresh(fitting)
    return "CP Fittings and Sanitary Added"


@router.post("/build/relationship/product/rooms/size/",dependencies=[Depends(deps.get_current_user)])
async def create_product_rooms_size(relations:List[schemas.add_product_room_size],db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized access")
    for relation in relations:
        build_relation=model.product_room_size(p_id=relation.p_id,s_id=relation.s_id,room_id=relation.room_id)
        db.add(build_relation)
        db.commit()
        db.refresh(build_relation)
    return "Relationship Established"


@router.post("/build/relationship/product/sanitary/",dependencies=[Depends(deps.get_current_user)])
async def create_product_sanitary(relations:List[schemas.add_product_fitting],db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    user = db.query(model.user).filter(model.user.phone_number == user.phone_number).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized access")
    for relation in relations:
        build_relation=model.product_fitting(p_id=relation.p_id,fitting_id=relation.fitting_id)
        db.add(build_relation)
        db.commit()
        db.refresh(build_relation)
    return "Relationship Established"