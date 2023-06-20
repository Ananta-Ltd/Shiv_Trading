from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_NAME:str
    DATABASE_HOST:str
    DATABASE_PORT:int
    DATABASE_USER: str
    DATABASE_PASSWORD:str
    ALGORITHM:str
    SECRET_KEY:str
    TOKEN_EXPIRY_LIMIT:int
    IMAGEKIT_PRIVATE_KEY:str
    IMAGEKIT_PUBLIC_KEY:str
    IMAGEKIT_URL:str
    class Config:
        env_file='./.env'

settings=Settings()