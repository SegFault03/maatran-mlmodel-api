<h1>Maatran MLmodel API</h1>
<i>Author and Owner: Niladri Das</i>

## Dependencies

- Python 3.6 or above ( ideally python 3.10+ )
- FastAPI v0.45.0 or above

</br>
<p>This repository contains the machine learning model (Pregnancy risk classifier) used 
in the Maatran app. (here's the link to the repo containing the source code and packages for the app: <a href="https://github.com/SegFault03/Maatran"> Maatran Android app</a>)<br>
You can interact with the API <a href="https://segfault03.github.io/maatran-mlmodel-api/">here</a>.
<br>(Please note: You might have to wait a few seconds after clicking the 'submit' button upon filling up the form. Please be patient)<br>
The repo structure is as follows:
<ul><li><a href="https://github.com/SegFault03/maatran-mlmodel-api/tree/main/models">models</a>: contains the pickle files for the models deployed.</li>
<li><a href="https://github.com/SegFault03/maatran-mlmodel-api/tree/main/scripts">scripts</a>: contains the JavaScript code for the web-page deployed</li>
<li><a href="https://github.com/SegFault03/maatran-mlmodel-api/tree/main/styles">styles</a>: contains the CSS file for the web-page deployed</li>
<li><a href="https://github.com/SegFault03/maatran-mlmodel-api/tree/main/consume-options">consume-options</a>: contains code for interacting with the api, written in JS and Java </li>
<li>index.html: the root HTML file for the web-page deployed</li>
<li>main.py: the source-code for the API deployed, built using FastAPI</li>
<li>requirements.txt: contains the dependencies necessary for building and running the API (for both local and remote deployment)</li></p>

## Instructions on building the API

### 1. Clone/fork the repository

```zsh
git clone https://github.com/SegFault03/maatran-mlmodel-api
```

### 2. Create a Virtual Environment

```zsh
python3 -m venv ./venv
```

 - Alternatively, any other suitable way to create a virtual environment ( such as `virtualenv` or `conda` ) can be used as per convenience.

 ### 3. Activate the Virtual Environment

 - `zsh` or `bash`

 ```zsh
source ./venv/bin/activate
 ```

### 4. Install all Required Packages

```zsh
python3 -m pip install requirements.txt
```

You're good to go!

API docs can be found <a href="https://zxv5hi.deta.dev/docs">here</a>.
