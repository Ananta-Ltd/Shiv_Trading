from sqlalchemy.exc import ProgrammingError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from core.config import settings

user=settings.DATABASE_USER
host=settings.DATABASE_HOST
password=settings.DATABASE_PASSWORD
port=settings.DATABASE_PORT 
name=settings.DATABASE_NAME

url=f"postgresql+psycopg2://{user}:{password}@{host}/{name}?client_encoding=utf-8"

engine=create_engine(url)
session=sessionmaker(autoflush=False, bind=engine)
base=declarative_base()


def create_database():
    try:
        engine.connect()
    except ProgrammingError:
        base.metadata.create_all(bind = engine)
def get_database():
    db=session()
    try:
        yield db
    except:
        db.close()