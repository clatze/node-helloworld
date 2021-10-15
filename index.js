// Run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

console.log('END');
