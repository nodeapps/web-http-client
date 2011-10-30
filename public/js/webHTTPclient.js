// this is the web-http-client widget

var webHTTPclient = {};
webHTTPclient.request = function(options, callback){
  
  // perform jQuery ajax request
  $.ajax({
     url:   '/request',
     type:  'POST',
     data:   options,

     // after the XHR has successfully completed, process it
     success: function(data, textStatus, XMLHttpRequest){
       console.log('this is success');
       callback( null, data );
     },
     error: function(XMLHttpRequest, textStatus, errorThrown){
       console.log('this is an error');
       console.log(errorThrown);
       callback('this is an error');
     }
     
  });

};

webHTTPclient.headers = [
 "Accept",
 "Accept-Language",
 "Accept-Encoding",
 "Cache-Control",
 "Cookie",
 "Connection",
 "Content-Length",
 "Content-Type",
 "From",
 "Host",
 "If-Match",
 "If-Modified-Since",
 "Host",
 "If-None-Match",
 "If-Range",
 "If-Unmodified-Since",
 "Pragma",
 "User-Agent"
];