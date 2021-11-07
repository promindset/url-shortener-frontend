let server = 'https://fhjv0wnzff.execute-api.us-east-1.amazonaws.com/dev/';
let xhr = new XMLHttpRequest();
xhr.open('POST', server, true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function () {
  // Call a function when the state changes.
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log(XMLHttpRequest.response);
  }
};
xhr.send({ url: 'https://hasdadasdasdasda.com' });
console.log('dsad');
