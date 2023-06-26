from fastapi import APIRouter
import io
from fastapi import File, HTTPException, Depends, UploadFile
from sqlalchemy.orm import Session
from starlette import status
from db import model,schemas,dbconnect
from core import security,deps
from .imagekit import imagekit


router=APIRouter(tags = ['Add photos of different products'])

async def validate_photo(filename=File(...)):
    allowed_extensions = ['.jpg', '.jpeg', '.png']
    if not any(filename.filename.lower().endswith(ext) for ext in allowed_extensions):
        raise HTTPException(status_code = 400, detail = "Only JPG files are allowed.")
    max_image_size=15*1024*1024
    if (len(await filename.read())>max_image_size):
            raise HTTPException(status_code = status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail = "Image should be less than 15MB")


@router.post("/upload/tiles/photos/",dependencies = [Depends(deps.get_current_user)])
async def upload_tiles_photos(product:str,size:str,room:str,up_photo:UploadFile=File(...),user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user = db.query(model.user).filter(
        model.user.phone_number == user.phone_number,
        model.user.is_superuser == True
    ).first()
    if not user or not user.is_superuser:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Unauthorized attempt to make changes")

    query = db.query(model.product).filter(model.product.product_name == product).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such product found")

    query = db.query(model.size).filter(model.size.sizes == size).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such size available")

    query = db.query(model.rooms).filter(model.rooms.room_name == room).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such room found")

    tile_type = db.query(model.product_room_size).join(model.product).join(model.size).join(model.rooms).filter(
        model.product.product_name == product,
        model.rooms.room_name == room,
        model.size.sizes == size
    ).first()

    validate_photo(up_photo)
    image_data = await up_photo.read()

    # Upload the image to ImageKit
    upload_response = imagekit.upload_file(
        file = io.BytesIO(image_data),
        file_name = tile_type.prs_id,
        options = { "folder": "/tiles/" }
    )
    # Get the URL of the uploaded image
    image_url = upload_response.get("response")
    image_url = image_url.get("url")
    photo_address = image_url
    upload_photo = model.tiles_photos(photo_address = photo_address, prs_id = tile_type.prs_id)
    db.add(upload_photo)
    db.commit()
    db.refresh(upload_photo)

    return { "message": "Photo uploaded successfully" }


@router.post("/upload/cpfittings/photos/",dependencies = [Depends(deps.get_current_user)])
async def upload_cpfittings_photos(product:str,fitting_name:str,up_photo:UploadFile=File(...),user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user = db.query(model.user).filter(
        model.user.phone_number == user.phone_number,
        model.user.is_superuser == True
    ).first()
    if not user or not user.is_superuser:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Unauthorized attempt to make changes")

    query = db.query(model.product).filter(model.product.product_name == product).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such product found")

    query = db.query(model.cpfittings).filter(model.cpfittings.fitting_name == fitting_name).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such item in CP Fittings and Sanitary available")

    tile_type = db.query(model.product_fitting).join(model.product).join(model.cpfittings).filter(
        model.product.product_name == product,
        model.size.sizes == fitting_name
    ).first()

    validate_photo(up_photo)
    image_data = await up_photo.read()

    # Upload the image to ImageKit
    upload_response = imagekit.upload_file(
        file = io.BytesIO(image_data),
        file_name = tile_type.p_fitting_id,
        options = { "folder": "/cpphotos/" }
    )
    # Get the URL of the uploaded image
    image_url = upload_response.get("response")
    image_url = image_url.get("url")
    photo_address = image_url
    upload_photo = model.CPPhotos(photo_address = photo_address, p_fitting_id = tile_type.p_fitting_id)
    db.add(upload_photo)
    db.commit()
    db.refresh(upload_photo)

    return { "message": "Photo uploaded successfully" }


@router.post("/upload/granite&marble/photos/",dependencies = [Depends(deps.get_current_user)])
async def upload_granite_photos(product:str,granite:str,thick:str,up_photo:UploadFile=File(...),user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user = db.query(model.user).filter(
        model.user.phone_number == user.phone_number,
        model.user.is_superuser == True
    ).first()
    if not user or not user.is_superuser:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Unauthorized attempt to make changes")

    query = db.query(model.product).filter(model.product.product_name == product).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such product found")

    query = db.query(model.Granite).filter(model.Granite.category == granite).first()
    if not query:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No such category of Granite & Marble available")

    tile_type = db.query(model.GraniteThick).join(model.product).join(model.Granite).join(model.Thick).filter(
        model.product.product_name == product
    ).filter(model.product.product_name==product).filter(model.Granite.category==granite).filter(
        model.Thick.thick==thick
    ).first()

    validate_photo(up_photo)
    image_data = await up_photo.read()

    # Upload the image to ImageKit
    upload_response = imagekit.upload_file(
        file = io.BytesIO(image_data),
        file_name = tile_type.gt_id,
        options = { "folder": "/granitephotos/" }
    )
    # Get the URL of the uploaded image
    image_url = upload_response.get("response")
    image_url = image_url.get("url")
    photo_address = image_url
    upload_photo = model.GranitePhotos(photo_address = photo_address, gt_id=tile_type.gt_id)
    db.add(upload_photo)
    db.commit()
    db.refresh(upload_photo)

    return { "message": "Photo uploaded successfully" }


@router.post("/upload/trending/product/photos/",dependencies = [Depends(deps.get_current_user)])
async def upload_trending_photos(up_photo:UploadFile=File(...),user:model.user=Depends(deps.get_current_user),db:Session=Depends(dbconnect.get_database)):
    user = db.query(model.user).filter(
        model.user.phone_number == user.phone_number,
        model.user.is_superuser == True
    ).first()
    if not user or not user.is_superuser:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Unauthorized attempt to make changes")

    validate_photo(up_photo)
    image_data = await up_photo.read()

    # Upload the image to ImageKit
    upload_response = imagekit.upload_file(
        file = io.BytesIO(image_data),
        file_name = "trending product",
        options = { "folder": "/trending_product/" }
    )
    # Get the URL of the uploaded image
    image_url = upload_response.get("response")
    image_url = image_url.get("url")
    photo_address = image_url
    upload_photo = model.TrendingProduct(photo_address = photo_address)
    db.add(upload_photo)
    db.commit()
    db.refresh(upload_photo)

    return { "message": "Photo uploaded successfully",
             "photo url":photo_address
             }


@router.post("/upload/finish/photos/",dependencies = [Depends(deps.get_current_user)])
async def upload_finish_photos(plan:str,up_photo:UploadFile=File(...),db:Session=Depends(dbconnect.get_database),user:model.user=Depends(deps.get_current_user)):
    user = db.query(model.user).filter(
        model.user.phone_number == user.phone_number,
        model.user.is_superuser == True
    ).first()
    if not user or not user.is_superuser:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Unauthorized attempt to make changes")
    validate_photo(up_photo)

    if plan=="Basic":
        image_data = await up_photo.read()

        # Upload the image to ImageKit
        upload_response = imagekit.upload_file(
            file = io.BytesIO(image_data),
            file_name = "shivtrading_basic",
            options = { "folder": "/basic_finish/" }
        )
        # Get the URL of the uploaded image
        image_url = upload_response.get("response")
        image_url = image_url.get("url")
        photo_address = image_url
        basic=model.BasicFinish(photo_address=photo_address)
        db.add(basic)
        db.commit()
        db.refresh(basic)
    if plan=="Standard":
        image_data = await up_photo.read()

        # Upload the image to ImageKit
        upload_response = imagekit.upload_file(
            file = io.BytesIO(image_data),
            file_name = "shivtrading_standard",
            options = { "folder": "/standard_finish/" }
        )
        # Get the URL of the uploaded image
        image_url = upload_response.get("response")
        image_url = image_url.get("url")
        photo_address = image_url
        standard=model.StandardFinish(photo_address=photo_address)
        db.add(standard)
        db.commit()
        db.refresh(standard)
    if plan=="Premium":
        image_data = await up_photo.read()

        # Upload the image to ImageKit
        upload_response = imagekit.upload_file(
            file = io.BytesIO(image_data),
            file_name = "shivtrading_premium",
            options = { "folder": "/premium_finish/" }
        )
        # Get the URL of the uploaded image
        image_url = upload_response.get("response")
        image_url = image_url.get("url")
        photo_address = image_url
        premium=model.PremiumFinish(photo_address=photo_address)
        db.add(premium)
        db.commit()
        db.refresh(premium)
    return "Photo added successfully"
