var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  origin: 'http://127.0.0.1:3000/index.html?'
};
var data = {"data":[45,23,12,34,16,32]};
var dataJson = JSON.stringify(data);
fetch(`https://maatranapi-1-c9699936.deta.app/predict?sample=${dataJson}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));