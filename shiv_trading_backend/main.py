from fastapi import FastAPI
from routers import routers

app = FastAPI()

@app.get("/")
def welcome():
    return "Welcome to Shiv Trading FastAPI"

app.include_router(routers.router)