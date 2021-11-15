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
  document.getElementById('loading').innerText = 'Loading ...';
  let url_data = document.getElementById('1').value;
  postrequest(url_data);
}

// Add Data To The Main Page
function addData(result) {
  let result2 = JSON.parse(result);
  // Show Results DIV
  // document.getElementById('result_container').innerText = '';
  // document.getElementById('result_container').style.display = 'block';
  document.getElementById('result_container').style.display = 'unset';
  document.getElementById('result_text').value = result2.shortenedURL;
  navigator.clipboard.writeText(result2.shortenedURL);
  document.getElementById('1').style.pointerEvents = 'none';
  document.getElementById('submit').style.display = 'none';
  document.getElementById('resubmit').style.display = 'unset';
  document.getElementById('1').style.backgroundColor = 'ghostwhite';
  document.getElementById('loading').innerText = 'Successful !';
  window.setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
  }, 3000);
}

// new URL
function newURL() {
  document.getElementById('1').style.pointerEvents = 'unset';
  document.getElementById('result_container').style.display = 'none';
  document.getElementById('1').value = '';
  document.getElementById('1').style.backgroundColor = 'white';
  document.getElementById('resubmit').style.display = 'none';
  document.getElementById('submit').style.display = 'unset';
}
// Copy Link Button
function copyText() {
  let data = document.getElementById('result_text');
  navigator.clipboard.writeText(data.value);
  document.getElementById('loading').innerText = '';
  document.getElementById('loading').style.display = 'block';
  document.getElementById('loading').innerText = 'Linked Copied !';
  window.setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
  }, 3000);
}
function msgAlert() {}
