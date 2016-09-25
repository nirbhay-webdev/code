var http = require('http');
var url  = require('url');

http.createServer(requestHandler).listen(3000);

// Two types of requests
// Static Files requests
// Dynamic Chat File Requests

function requestHandler(request,response){
  response.writeHead(200,{
    "Content-Type":"application/json"
  });
  response.write('Hello World');
  response.end();

  var temp = request;
  console.log(temp);


}

function responseHandler(request,response){
    response.writeHead(200,{
      "Content-Type":"application/json"
    });
    response.write('Hello World');
    var temp = request;
    response.end();
    console.log(request.url);
}
