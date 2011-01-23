var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(80);

/*
http.createServer(require('stack')(
  require('./lib/stack/request.stack')(),
  require('./lib/stack/webservice.stack')(),
  require('./lib/stack/static.stack')()
)).listen(8080);
*/

console.log('> bugger started on port 8080');




