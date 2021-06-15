// Run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

// testing http client
var request = require('request');
request('http://www.google.com', function(error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

console.log('END');
