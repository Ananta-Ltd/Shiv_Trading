from .dbconnect import base
from sqlalchemy import String,Integer,Column,ForeignKey,Boolean,Text


class user(base):
    __tablename__ = "users"

    id = Column(Integer, nullable=False, primary_key=True)
    email = Column(String, nullable=True, unique=True)
    country_code=Column(String,nullable=False)
    phone_number = Column(String, unique=True, nullable=False)
    plan=Column(String,nullable=False)
    is_superuser=Column(Boolean)

class login(base):
    __tablename__= "login"

    sn=Column(Integer,autoincrement=True,primary_key=True)
    id=Column(Integer,ForeignKey("users"),nullable=False)
    pasword=Column(String,nullable=False)


class product(base):
    __tablename__="product"

    p_id=Column(Integer,autoincrement=True,primary_key=True)
    product_name=Column(String,nullable=False)


class size(base):
    __tablename__="sizes"

    s_id=Column(Integer,autoincrement=True,primary_key=True)
    sizes=Column(Text,nullable=False)


class rooms(base):
    __tablename__="rooms"

    room_id=Column(Integer,nullable=False,primary_key=True)
    room_name=Column(String,nullable=False)


class cpfittings(base):
    __tablename__="cpfittings"

    fitting_id=Column(Integer,primary_key=True)
    fitting_name=Column(String, nullable=False)


class product_room_size(base):
    __tablename__="product_room_size"

    prs_id=Column(Integer,autoincrement=True,primary_key=True)
    p_id=Column(Integer,ForeignKey("product"))
    room_id=Column(Integer,ForeignKey("rooms"))
    s_id=Column(Integer,ForeignKey("sizes"))


class tiles_photos(base):
    __tablename__="tiles_photos"

    photo_id=Column(Integer,primary_key = True)
    photo_address=Column(String,nullable = False,unique = True)
    prs_id=Column(Integer, ForeignKey("product_room_size"))



class product_fitting(base):
    __tablename__="product_fitting"

    p_fitting_id=Column(Integer,primary_key=True)
    p_id=Column(Integer,ForeignKey("product"))
    fitting_id=Column(Integer,ForeignKey("cpfittings"))



class CPPhotos(base):
    __tablename__="cpphotos"

    cp_id=Column(Integer,primary_key = True)
    photo_address=Column(String,nullable = False)
    p_fitting_id=Column(Integer,ForeignKey("product_fitting"))


class Granite(base):
    __tablename__="granites"

    granite_id=Column(Integer,autoincrement = True,primary_key = True)
    category=Column(String,nullable = False)
    p_id=Column(Integer,ForeignKey("product"))

class Thick(base):
    __tablename__="thick"

    thick_id=Column(Integer,autoincrement = True,primary_key = True)
    thick=Column(String,nullable = False)

class GraniteThick(base):
    __tablename__="granitethick"

    gt_id=Column(Integer,autoincrement = True,primary_key = True)
    granite_id=Column(Integer,ForeignKey("granites"))
    thick_id=Column(Integer,ForeignKey("thick"))


class GranitePhotos(base):
    __tablename__="granitephoto"

    gp_id=Column(Integer,autoincrement = True,primary_key = True)
    photo_address=Column(String,nullable = False)
    gt_id=Column(Integer,ForeignKey("granitethick"))