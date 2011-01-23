// this module has been prepared to be imported by webservice.js

var request = require('request'), 
    fs      = require('fs');

this.name = "bugger api";
this.title = "Welcome to the bugger webservice!";

// makes a request to an endpoint with options
exports.request = function(options, callback){
  console.log(options);
  request({
    uri:options.uri,
    method:options.verb,
    data:options.data
  }, function(err, resp, result){
    
    if(err){
      return callback(err);
    }
    console.log(result);
    callback(null, 'worked!');
  });
};

exports.request.description = "Sends an http request based on the parameters you specify. Great for debugging!"
exports.request.schema = {
  "uri": {"type":"string", optional:false, default: "http://localhost:8080/"},
  "verb": {"type":"string", optional:false},
  "data": {"type":"string", optional:false}
};

exports.widget = function(options, callback){
  
  fs.readFile('./public/js/bugger.jquery.js', function(err, result){
    
    if(err){
      return callback(err);
    }
    
    callback(null, result.toString(), {headers:{"Content-type":'application/javascript'}});
    
  });
  
};

exports.request.description = "Returns the the JS source for the bugger widget."
