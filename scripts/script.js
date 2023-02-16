const result = document.getElementById('result');
const form = document.getElementById('form');
const result_div = document.getElementById('result-div');
form.addEventListener("submit",getData);
result_div.style.display = "none";
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getData(event)
{
    let age = document.getElementById('age').value;
    let bs = document.getElementById('bs').value;
    let sbp = document.getElementById('sbp').value;
    let dbp = document.getElementById('dbp').value;
    let hr = document.getElementById('hr').value;
    let temp = document.getElementById('temp').value;
    let data = {"data":[age,bs,sbp,dbp,hr,temp]};
    let dataJson = JSON.stringify(data);
    event.preventDefault();
    fetch(`https://zxv5hi.deta.dev/predict?sample=${dataJson}`, requestOptions)
  .then(response => response.text())
  .then(prediction => {result.innerText=prediction.substring(2,prediction.lastIndexOf('"'));
  result_div.style.display = "block";})
  .catch(error => console.log('error', error));
}