from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import joblib
import json
import numpy


model = joblib.load('models/pregnancy_risk_classifier.pkl')
scaler = joblib.load('models/scaler.pkl')

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
)
@app.get('/predict')
async def getPrediction(sample: str) -> str:
    data = json.loads(sample)["data"]
    data = numpy.array(data)
    data = scaler.transform(data.reshape(1,-1))
    result = model.predict(data)
    return JSONResponse(result.tolist())

@app.get('/sayhi')
async def wakeUp() -> str:
    return "Hey!"
