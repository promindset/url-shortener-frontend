// SERVER URL
API_URL = 'https://fhjv0wnzff.execute-api.us-east-1.amazonaws.com/dev/';

// POST Request
function postrequest(data) {
  // Init Request
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    url: data,
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  // Fetch Request
  fetch(API_URL, requestOptions)
    .then((response) => response.text())
    .then((result) => addData(result))
    .catch((error) => console.log('error', error));
}

// Submit Data
function submitURL() {
  let url_data = document.getElementById('1').value;
  postrequest(url_data);
}

// Add Data To The Main Page
function addData(result) {
  // display data on main page
  console.log('result:', result);
}
