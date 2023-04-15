# maatran-mlmodel-api
The gce branch contains the files and scripts necessary for deploying the app on a GCP Compute Engine (VM instance).
The app has hence been migrated to use the Flask framework for this branch only.
Here's the endpoint: 
http://34.29.128.74:8080/ (invoke sayhi)
<br>http://34.29.128.74:8080/predict/{"data":[...]} (invoke predict}
<br>The CORS policy has not been set-up, so there might be errors upon requesting the resource in some cases.
<br>See https://flask-cors.readthedocs.io/en/3.0.7/ for more info to set up CORS
