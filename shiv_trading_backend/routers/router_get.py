from typing import Optional
from fastapi import APIRouter
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from db import dbconnect, model, schemas
from core import security,deps

router=APIRouter(tags = ['Get Products'])

@router.get("/tiles/photos/")
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
            url=db.query(model.tiles_photos).join(model.product_room_size).join(model.rooms).join(model.size).join(model.product).filter(
                model.size.sizes==size.strip()).filter(model.product.product_name==product.strip()).filter(model.rooms.room_name==room.strip()).all()
            details=[]
            for row in url:
                size=db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(model.tiles_photos.prs_id==row.prs_id).first()
                ls={
                    "size":size.sizes,
                    "url":row.photo_address
                }
                details.append(ls)
            return details
        if not size and product!=None and not product.isspace() and room!=None and not room.isspace():
            url = db.query(model.tiles_photos).join(model.product_room_size).join(model.rooms).join(
                model.product
                ).filter(
                model.product.product_name == product, model.rooms.room_name == room
            ).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not room and product!=None and not product.isspace() and size!=None and not size.isspace():
            url=db.query(model.tiles_photos).join(model.product_room_size).join(model.size).join(model.product).filter(
                model.product.product_name==product,model.size.sizes==size).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not room and not size and product!=None and not product.isspace():
            url=db.query(model.tiles_photos).join(model.product_room_size).join(model.product).filter(
                model.product.product_name==product).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and size!=None and not size.isspace() and room!=None and not room.isspace():
            url=db.query(model.tiles_photos).join(model.product_room_size).join(model.rooms).join(model.size).filter(
                model.rooms.room_name==room,model.size.sizes==size).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and not size and room!=None and not room.isspace():
            url=db.query(model.tiles_photos).join(model.product_room_size).join(model.rooms).filter(
                model.rooms.room_name==room).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and not room and size!=None and not size.isspace():
            url=db.query(model.tiles_photos).join(model.product_room_size).join(model.size).filter(
                model.size.sizes==size).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and not room and not size:
            url=db.query(model.tiles_photos).all()
            details = []
            for row in url:
                size = db.query(model.size).join(model.product_room_size).join(model.tiles_photos).filter(
                    model.tiles_photos.prs_id == row.prs_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
    except Exception as e:
        return str(e)


@router.get("/cpfittings/photos/")
async def get_cpfitting_photos(prod_name:str,fitting_name:Optional[str]=None,db:Session=Depends(dbconnect.get_database)):
    if prod_name!=None and not prod_name.isspace():
            query=db.query(model.product).filter(model.product.product_name==prod_name).first()
            if not query:
                raise HTTPException(status_code = status.HTTP_501_NOT_IMPLEMENTED,detail = "No such product available")
            query=db.query(model.cpfittings).filter(model.cpfittings.fitting_name==fitting_name).first()
            if not query:
                raise HTTPException(status_code = status.HTTP_501_NOT_IMPLEMENTED,detail = "No such category of cp fittings and sanitary available")
            if not fitting_name:
                photo = db.query(model.CPPhotos).join(model.product).filter(
                    model.product.product_name == prod_name).all()
                photos = [row.rem_photo_address for row in photo]
                return photos
            photo=db.query(model.CPPhotos).join(model.cpfittings).join(model.product).filter(model.cpfittings.fitting_name==fitting_name).filter(model.product.product_name==prod_name).all()
            photos=[row.rem_photo_address for row in photo]
            return photos
    else:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Product name should be valid")


@router.get("/granite/photos/")
async def get_granite_photos(product:Optional[str]=None,granite:Optional[str]=None,thick:Optional[str]=None,db:Session=Depends(dbconnect.get_database)):
    if product and product != None:
        is_product = db.query(model.product).filter(model.product.product_name == product).first()
        if not is_product:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "Specified product is not available")
    if granite and granite != None:
        is_size = db.query(model.Granite).filter(model.Granite.category == granite).first()
        if not is_size:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "Specified granite is not available")
    if thick and thick != None:
        is_room = db.query(model.Thick).filter(model.Thick.thick == thick).first()
        if not is_room:
            raise HTTPException(
                status_code = status.HTTP_404_NOT_FOUND, detail = "Specified thickness of granite is not available"
                )
    try:
        if product != None and granite != None and thick != None and product and not product.isspace() and granite and not granite.isspace() and thick and not thick.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(model.Granite).join(
                model.Thick
                ).join(model.product).filter(
                model.Granite.category == granite.strip()
            ).filter(model.product.product_name == product.strip()).filter(model.Thick.thick == thick.strip()).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                    ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not granite and product != None and not product.isspace() and thick != None and not thick.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(
                model.Thick
            ).join(model.product).filter(
                model.product.product_name == product.strip()).filter(model.Thick.thick == thick.strip()).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not thick and product != None and not product.isspace() and granite != None and not granite.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(model.Granite).join(
                model.product).filter(
                model.Granite.category == granite.strip()
            ).filter(model.product.product_name == product.strip()).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not granite and not thick and product != None and not product.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(
                model.product).filter(model.product.product_name == product.strip()).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and granite != None and not granite.isspace() and thick != None and not thick.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(model.Granite).join(
                model.Thick
            ).filter(
                model.Granite.category == granite.strip()
            ).filter(model.Thick.thick == thick.strip()).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and not granite and thick != None and not thick.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(
                model.Thick
            ).filter(model.Thick.thick == thick.strip()).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GraniteThick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.thick,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and not thick and granite != None and not granite.isspace():
            url = db.query(model.GranitePhotos).join(model.GraniteThick).join(model.Granite).filter(
                model.Granite.category == granite.strip()
            ).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
        if not product and not granite and not thick:
            url = db.query(model.GranitePhotos).all()
            details = []
            for row in url:
                size = db.query(model.Thick).join(model.GranitePhotos).filter(
                    model.GranitePhotos.gt_id == row.gt_id
                ).first()
                ls = {
                    "size": size.sizes,
                    "url": row.photo_address
                }
                details.append(ls)
            return details
    except Exception as e:
        return str(e)


@router.get("/trending/photos/")
async def get_trending_photos(db:Session=Depends(dbconnect.get_database)):
    photos=db.query(model.TrendingProduct).all()
    if not photos:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = "No trending products available")
    return photos


@router.get("/finish/photos/",dependencies = [Depends(deps.get_current_user)])
async def get_finish_photos(db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    user = db.query(model.user).filter(
        model.user.phone_number == user.phone_number
    ).first()
    if not user:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Unauthorized access")
    plan=str(user.plan)
    if plan.lower() == "basic":
        photos = [photo[0] for photo in db.query(model.BasicFinish.photo_address).all()]
        return photos

    if plan.lower() == "standard":
        photos = [photo[0] for photo in db.query(model.StandardFinish.photo_address).all()]
        return photos

    if plan.lower() == "premium":
        photos = [photo[0] for photo in db.query(model.PremiumFinish.photo_address).all()]
        return photos
