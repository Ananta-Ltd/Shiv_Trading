from fastapi import APIRouter,Depends,status,HTTPException
from sqlalchemy.orm import Session
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from db import model,schemas,dbconnect
from core import security,deps
from typing import Optional
from fastapi import File,UploadFile

model.base.metadata.create_all(bind=dbconnect.engine)

router=APIRouter(tags=['Authentication'])

def validate_photo(filename:str):
    allowed_extensions = ['.jpg', '.jpeg', '.png']
    if not any(filename.lower().endswith(ext) for ext in allowed_extensions):
        raise HTTPException(status_code = 400, detail = "Only JPG files are allowed.")
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
    validate_photo(photo.filename)

@router.get("/tiles/")
async def get_tiles(product:Optional[str]=None,size:Optional[str]=None,room:Optional[str]=None,db:Session=Depends(dbconnect.get_database)):
    if product and product!=None:
        is_product=db.query(model.product).filter(model.product.product_name==product).first()
        if not is_product:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = "Specified product is not available")
    if size and size!=None:
        is_size=db.query(model.size).filter(model.size.sizes==size).first()
        if not is_size:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = "Specified size is not available")
    if room and room!=None:
        is_room=db.query(model.rooms).filter(model.rooms.room_name==room).first()
        if not is_room:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = "Specified room type is not available")
    try:
        if product!=None and room!=None and size!=None and product and not product.isspace() and room and not room.isspace() and size and not size.isspace():
            url=db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.rooms).join(model.size).join(model.product).filter(
                model.size.sizes==size.strip()).filter(model.product.product_name==product.strip()).filter(model.rooms.room_name==room.strip()).all()
            urls = [row.photo_address for row in url]
            return urls
        if not size and product!=None and not product.isspace() and room!=None and not room.isspace():
            url = db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.rooms).join(
                model.product
                ).filter(
                model.product.product_name == product, model.rooms.room_name == room
            ).all()
            urls = [row.photo_address for row in url]
            return urls
        if not room and product!=None and not product.isspace() and size!=None and not size.isspace():
            url=db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.size).join(model.product).filter(
                model.product.product_name==product,model.size.sizes==size).all()
            urls = [row.photo_address for row in url]
            return urls
        if not room and not size and product!=None and not product.isspace():
            url=db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.product).filter(
                model.product.product_name==product).all()
            urls = [row.photo_address for row in url]
            return urls
        if not product and size!=None and not size.isspace() and room!=None and not room.isspace():
            url=db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.rooms).join(model.size).filter(
                model.rooms.room_name==room,model.size.sizes==size).all()
            urls = [row.photo_address for row in url]
            return urls
        if not product and not size and room!=None and not room.isspace():
            url=db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.rooms).filter(
                model.rooms.room_name==room).all()
            urls = [row.photo_address for row in url]
            return urls
        if not product and not room and size!=None and not size.isspace():
            url=db.query(model.tiles_photos.photo_address).join(model.product_room_size).join(model.size).filter(
                model.size.sizes==size).all()
            urls = [row.photo_address for row in url]
            return urls
        if not product and not room and not size:
            url=db.query(model.tiles_photos.photo_address).all()
            urls = [row.photo_address for row in url]
            return urls
    except Exception as e:
        return str(e)

@router.get("/products/")
async def get_rem_products(prod_name:str,db:Session=Depends(dbconnect.get_database)):
    if not prod_name.isspace():
            photo=db.query(model.CPPhotos).join(model.product).filter(model.product.product_name==prod_name).all()
            photos=[row.rem_photo_address for row in photo]
            return photos
    else:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Product name should be valid")
# @router.post("/add/products/",dependencies=[Depends(deps.get_current_user)])
# async def add_products(products:List[schemas.add_product],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
#     user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
#     for product in products:
#         product=model.product(product_name=product.product_name)
#         db.add(product)
#         db.commit()
#         db.refresh(product)
#     return "Product Added"
#
#
# @router.post("/add/sizes/",dependencies=[Depends(deps.get_current_user)])
# async def add_sizes(size:List[schemas.add_size],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
#     user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
#     for s in size:
#         sizes=model.size(sizes=s.sizes)
#         db.add(sizes)
#         db.commit()
#         db.refresh(sizes)
#     return "Sizes Added"
#
#
# @router.post("/add/rooms/",dependencies=[Depends(deps.get_current_user)])
# async def add_rooms(rooms:List[schemas.add_rooms],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
#     user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
#     for s in rooms:
#         room=model.rooms(room_name=s.room_name)
#         db.add(room)
#         db.commit()
#         db.refresh(room)
#     return "Rooms Added"
#
#
# @router.post("/add/cp/items/",dependencies=[Depends(deps.get_current_user)])
# async def add_cp_items(fittings:List[schemas.add_cpfittings],user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
#     user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized Access")
#     for s in fittings:
#         fitting=model.cpfittings(fitting_name=s.fitting_name)
#         db.add(fitting)
#         db.commit()
#         db.refresh(fitting)
#     return "CP Fittings and Sanitary Added"
#
#
# @router.post("/build/relationship/product/rooms/size/",dependencies=[Depends(deps.get_current_user)])
# async def create_product_rooms_size(relations:List[schemas.add_product_room_size],db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
#     user=db.query(model.user).filter(model.user.phone_number==user.phone_number).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized access")
#     for relation in relations:
#         build_relation=model.product_room_size(p_id=relation.p_id,s_id=relation.s_id,room_id=relation.room_id)
#         db.add(build_relation)
#         db.commit()
#         db.refresh(build_relation)
#     return "Relationship Established"
#
#
# @router.post("/build/relationship/product/sanitary/",dependencies=[Depends(deps.get_current_user)])
# async def create_product_sanitary(relations:List[schemas.add_product_fitting],db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
#     user = db.query(model.user).filter(model.user.phone_number == user.phone_number).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized access")
#     for relation in relations:
#         build_relation=model.product_fitting(p_id=relation.p_id,fitting_id=relation.fitting_id)
#         db.add(build_relation)
#         db.commit()
#         db.refresh(build_relation)
#     return "Relationship Established"