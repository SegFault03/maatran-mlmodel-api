const result = document.getElementById('result');
const form = document.getElementById('form');
const result_div = document.getElementById('result-div');
const result_title = document.getElementById('result-title');
form.addEventListener("submit",getData);
result_div.style.display = "none";
window.onload = function()
{
    fetch(`https://maatranapi-1-c9699936.deta.app/sayhi`, requestOptions)
    .then((response) => response.text())
    .then((response) => console.log("API called successfully"))
}
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getData(event)
{
  result_div.style.display = "block";
  result_title.innerText = "Loading...";
  result.style.display = "none";
    let age = document.getElementById('age').value;
    let bs = document.getElementById('bs').value;
    let sbp = document.getElementById('sbp').value;
    let dbp = document.getElementById('dbp').value;
    let hr = document.getElementById('hr').value;
    let temp = document.getElementById('temp').value;
    let data = {"data":[age,sbp,dbp,bs,temp,hr]};
    let dataJson = JSON.stringify(data);
    event.preventDefault();
    fetch(`https://maatranapi-1-c9699936.deta.app/predict?sample=${dataJson}`, requestOptions)
  .then(response => response.text())
  .then(prediction => {
    let formatString = prediction.substring(1,prediction.lastIndexOf('"'));
    formatString = formatString.charAt(0).toUpperCase() + formatString.slice(1);
    result.innerText = formatString;
    let getColor = formatString => {
      if(formatString == "Low risk")
      return "green";
      else if(formatString == "Mid risk")
      return "orange";
      else
      return "red";
    }
    result.style.backgroundColor = getColor(formatString);
    result.style.display = "block";
    result_title.innerText = "Here's your prediction!";
  })
  .catch(error => console.log('error', error));
}