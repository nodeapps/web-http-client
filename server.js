var ws = require('webservice'),
    http = require('http'),
    bugger = require('./lib/bugger');

http.createServer(require('stack')(
  require('./lib/stack/request.stack')(),
  require('./lib/stack/webservice.stack')(),
  require('./lib/stack/static.stack')()
)).listen(8080);






