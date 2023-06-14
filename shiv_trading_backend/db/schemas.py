from pydantic import EmailStr,BaseModel
from typing import Optional

class user(BaseModel):

    email:EmailStr
    country_code:str
    phone_number:str
    plan:Optional[str]="basic"
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


class add_cpfittings(BaseModel):
    fitting_name:str

class cpfittings(add_cpfittings):
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


class add_product_fitting(BaseModel):
        p_id:int
        fitting_id:int


class product_fitting(add_product_fitting):
        p_fitting_id:int

        class config:
            orm_mode:True