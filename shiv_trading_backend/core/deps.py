from fastapi import Depends, HTTPException,status
from sqlalchemy.orm import Session
from db import dbconnect,model,schemas
from core.security import auth_scheme,verify_access_token

def get_current_user(token:str=Depends(auth_scheme),db:Session= Depends(dbconnect.get_database)):
    credentials_exception=HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalidate Credentials", headers={"WWW-Authenticate":"Bearer"})
    token=verify_access_token(token,credentials_exception)
    user_details=db.query(model.user).filter(model.user.id==token).first()
    return user_details