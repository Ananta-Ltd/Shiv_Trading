from fastapi import FastAPI
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from fastapi.middleware.cors import CORSMiddleware

from routers import routers,router_post,router_get
import psycopg2
import codecs
from core.config import settings
from db.dbconnect import create_database

app = FastAPI()

@app.get("/")
def welcome():
    return "Welcome to Shiv Trading FastAPI"


@app.on_event("startup")
async def startup_event():
    create_database()
    conn = psycopg2.connect(
        dbname = settings.DATABASE_NAME,
        user = settings.DATABASE_USER,
        password = settings.DATABASE_PASSWORD,
        host = settings.DATABASE_HOST,
        port = settings.DATABASE_PORT
    )

    # Set isolation level to autocommit to execute commands immediately
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor=conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM product")

    # Fetch the result
    row_count = cursor.fetchone()[0]
    if row_count==0:
        with codecs.open("data.sql", "r", encoding = "utf-8") as sql_file:
            sql_commands = sql_file.read()

        # Execute the SQL commands
        cursor.execute(sql_commands)
    # Close the cursor and the database connection
    cursor.close()
    conn.close()


app.include_router(routers.router)
app.include_router(router_post.router)
app.include_router(router_get.router)


origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

