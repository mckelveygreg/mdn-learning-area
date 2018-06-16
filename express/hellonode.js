//Load HTTP module
var http = require('http');

//Create HTTP server and listen on port 8000 for response
http.createServer(function (request, response) {

    // set resposne HTTP header with HTTP status
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the rsponse body "hello world!"
    response.end('Hellow World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');