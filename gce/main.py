from flask import Flask
from flask_cors import CORS
import joblib
import json
import numpy


model = joblib.load('models/pregnancy_risk_classifier.pkl')
scaler = joblib.load('models/scaler.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/predict/<string:sample>', methods=['GET'])
def getPrediction(sample) -> str:
    data = json.loads(sample)["data"]
    data = numpy.array(data)
    data = scaler.transform(data.reshape(1,-1))
    result = model.predict(data)
    return result.tolist()

@app.route('/', methods=['GET'])
def wakeUp() -> str:
    return "Hey!"

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)