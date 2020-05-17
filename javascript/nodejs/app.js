const http = require('http');
const axios = require('axios').default;
const Constants = require('./data/Constants');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(Constants.HELLO_MESSAGE);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${Constants.HOSTNAME}:${Constants.PORT}/`);
});
