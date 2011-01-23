var http = require('http');

http.createServer(require('stack')(
  require('./lib/stack/request.stack')(),
  require('./lib/stack/webservice.stack')(),
  require('./lib/stack/static.stack')()
)).listen(8080);

console.log('> bugger started on port 8080');




