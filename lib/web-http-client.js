// this module has been prepared to be imported by webservice.js

var request = require('request'), 
    fs      = require('fs');

this.name = "web-http-client api";
this.title = "Welcome to the web-http-client webservice!";

// makes a request to an endpoint with options
exports.request = function(options, callback){
  
  var requestOptions = {
    uri:options.uri,
    method:options.verb,
    data:options.data,
  }
  
  if(options.followRedirects == "on"){
    requestOptions.followRedirect = true;
  }
  else{
    requestOptions.followRedirect = false;
  }
  
  try{
    requestOptions.headers = JSON.parse(options.headers);
  }
  catch(err){
     requestOptions.headers = {};
  }
  
  request(requestOptions, function(err, resp, result){
    
    if(err){
      if(err.errno = 47){
        return callback('Could not connect');
      }
      return callback(err);
    }
    
    callback(null, result);
  });

};


exports.request.description = "Sends an http request based on the parameters you specify. Great for debugging!"
exports.request.schema = {
  "uri": {"type":"string", optional:false, default: "http://localhost:8080/"},
  "verb": {"type":"string", optional:false},
  "data": {"type":"string", optional:true},
  "followRedirects": {"type":"string", optional:true},
  "headers": {"type":"string", optional:true}

};

exports.widget = function(options, callback){
  
  fs.readFile('./public/js/web-http-client.jquery.js', function(err, result){
    
    if(err){
      return callback(err);
    }
    
    callback(null, result.toString(), {headers:{"Content-type":'application/javascript'}});
    
  });
  
};
exports.widget.private = true;
exports.widget.description = "Returns the the JS source for the web-http-client widget."
