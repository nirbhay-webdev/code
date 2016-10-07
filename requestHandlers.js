
function staticFileServe(response){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/HTML"});
  response.write(file,'binary');
  response.end();
}

function start(response,request) {
  console.log("Request handler 'start' was called.");
  var body = [];
    request.on('data', function(chunk) {
    body.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(body).toString();
// at this point, `body` has the entire request body stored in it as a string
  console.log(body);
  });
  response.writeHead(200, {"Content-Type": "text/plain","Access-Control-Allow-Origin":"http://localhost:8888","Access-Control-Allow-Methods":"POST,GET,OPTIONS","Access-Control-Allow-Headers":"Content-Type"});
  response.write('Hello World');
  response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"}); response.write("Hello Upload");
  response.end();
}
exports.start = start;
exports.upload = upload;
