from fastapi import FastAPI
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

from routers import routers
import psycopg2
from psycopg2 import sql
from db.dbconnect import engine

app = FastAPI()

@app.get("/")
def welcome():
    return "Welcome to Shiv Trading FastAPI"


@app.on_event("startup")
async def startup_event():
    conn = psycopg2.connect(
        dbname = "shivtrading",
        user = "postgres",
        password = "s8r2j123",
        host = "localhost",
        port = "5432"
    )

    # Set isolation level to autocommit to execute commands immediately
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cursor=conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM product")

    # Fetch the result
    row_count = cursor.fetchone()[0]
    if row_count==0:
        with open("data.sql", "r") as sql_file:
            sql_commands = sql_file.read()

        # Execute the SQL commands
        cursor.execute(sql_commands)
    # Close the cursor and the database connection
    cursor.close()
    conn.close()


app.include_router(routers.router)