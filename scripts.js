var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var raw = JSON.stringify({
  url: 'https://hasdadasdasdasda.com',
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

fetch(
  'https://fhjv0wnzff.execute-api.us-east-1.amazonaws.com/dev/',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
