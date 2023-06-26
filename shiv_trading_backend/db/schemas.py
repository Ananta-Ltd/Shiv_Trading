from pydantic import EmailStr,BaseModel
from typing import Optional

class user(BaseModel):

    email:EmailStr
    country_code:str
    phone_number:str
    plan:Optional[str]="basic"
    is_superuser:Optional[bool]=False
    class config:
        orm_mode:True

class login(BaseModel):

    id:int
    pasword:str
    class config:
        orm_mode:True

class TokenData(BaseModel):

    id:int

class Token(BaseModel):

    access_token:str
    token_type:str

class user_create(user):
    password:str


class add_product(BaseModel):
    product_name:str

class product(add_product):
        p_id:int


class add_size(BaseModel):
    sizes:str

class size(add_size):
        s_id:int

        class config:
            orm_mode:True


class add_rooms(BaseModel):
    room_name:str

class rooms(add_rooms):
        room_id:int

        class config:
            orm_mode: True


class cpfittings(BaseModel):
        fitting_name: str
        fitting_id:int

        class config:
            orm_mode:True


class add_product_room_size(BaseModel):
    p_id: int
    room_id: int
    s_id: int

class product_room_size(add_product_room_size):
        p_size_id:int
        photos: Optional[str]

        class config:
            orm_mode:True


class product_room(BaseModel):
        p_room_id:int
        p_id:int
        room_id:int

        class config:
            orm_mode:True



class product_fitting(BaseModel):
        p_id: int
        fitting_id: int
        p_fitting_id:int

        class config:
            orm_mode:True


class tiles_photos(BaseModel):
    photo_id:int
    photo_address:str
    prs_id:int

    class config:
        orm_mode:True


class CPPhotos(BaseModel):
    rem_id:int
    rem_photos_address:str
    p_id:int

    class config:
        orm_mode:True


class UploadTilesPhoto(BaseModel):
    product:str
    room:str
    size:str


class Granite(BaseModel):

    granite_id:int
    category:str

    class config:
        orm_mode:True

class Thick(BaseModel):

    thick_id:int
    thick:str

    class config:
        orm_mode:True


class GraniteThick(BaseModel):

    gt_id:int
    granite_id:int
    thick_id:int

    class config:
        orm_mode:True


class GranitePhotos(BaseModel):

    gp_id:int
    photo_address:str
    gt_id:int


class TrendingProduct(BaseModel):

    tp_id:int
    photo_address:str

    class config:
        orm_mode:True


class BasicFinish(BaseModel):

    bf_id :int
    photo_address:str

    class config:
        orm_mode:True


class StandardFinish(BaseModel):

    sf_id:int
    photo_address:str

    class config:
        orm_mode:True
class PremiumFinish(BaseModel):

    pf_id:int
    photo_address:str

    class config:
        orm_mode:True