var http = require('http');
var url  = require('url');
var path = require('path');
var fs = require('fs');

function start(route,handle){

  function onRequest(request,response){

    pathName = url.parse(request.url).pathname;
    console.log(request);

    console.log("Request for"+pathName+" recieved");

    route(handle,pathName,response,request);

    console.log('Request for the'+pathName+' processed');

  }

  http.createServer(onRequest).listen(3000);

  var timeStamp = new Date();

  console.log('Server Started at'+ timeStamp);

}

exports.start = start;
