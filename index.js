// Run `node index.js` in the terminal
const http = require('http');

console.log(`Hello Node.js v${process.versions.node}!`);

// testing http client
http
  .get('http://example.org', response => {
    console.log('inside get');
    let todo = '';
    response.on('data', chunk => {
      todo += chunk;
      console.log('reading data');
    });

    response.on('end', () => {
      console.log('read data to end');
      console.log(todo);
    });
  })
  .on('error', error => {
    console.log('Error: ' + error.message);
  });

console.log('END');
