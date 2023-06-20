from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from core.config import settings

user=settings.DATABASE_USER
host=settings.DATABASE_HOST
password=settings.DATABASE_PASSWORD
port=settings.DATABASE_PORT 
name=settings.DATABASE_NAME

url=f"postgresql://{user}:{password}@{host}:{port}/{name}?client_encoding=utf-8"

engine=create_engine(url)
session=sessionmaker(autoflush=False, bind=engine)
base=declarative_base()

def get_database():
    db=session()
    try:
        yield db
    except:
        db.close()