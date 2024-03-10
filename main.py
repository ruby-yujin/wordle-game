
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

app = FastAPI()

answer = 'SUNNY'

@app.get('/answer')
def get_anwser():
    return {'answer':answer}

# 정적인 파일을 받아서 웹서버에서 보여주기
app.mount("/",StaticFiles(directory="static",html=True), name="static")
