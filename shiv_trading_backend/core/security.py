import json

from fastapi.security.oauth2 import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import timedelta,datetime
from passlib.context import CryptContext
from core.config import settings
from db import schemas

pwd_context=CryptContext(schemes=["bcrypt"], deprecated="auto")

auth_scheme=OAuth2PasswordBearer(tokenUrl="/login/")

# secret_key and algorithm is used for creating access token
SECRET_KEY=settings.SECRET_KEY
ALGORITHM=settings.ALGORITHM
EXPIRY_TIME=settings.TOKEN_EXPIRY_LIMIT


def create_access_token(data:dict):
    data_to_encode= data.copy() #copying the original data to other variable
    expire= datetime.utcnow() + timedelta(minutes=EXPIRY_TIME) #starting the expiry time of token
    data_to_encode.update({"expiry time":json.dumps(expire,default=str)})
    access_token=jwt.encode(data_to_encode,SECRET_KEY,algorithm=ALGORITHM)
    return access_token

def verify_access_token(token:str,credentials_exception):
    try:
        data_to_decode=jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM]) #decoding the access token to retrieve the decoded dictionary
        id:int=data_to_decode.get('id')
        if not id:
            raise credentials_exception
        token_data=schemas.TokenData(id=id)
        return token_data.id
    except JWTError:
        raise credentials_exception

def hash_password(password:str):
    return pwd_context.hash(password)

def verify_password(plain_pass,hash_pass):
    return pwd_context.verify(plain_pass,hash_pass)