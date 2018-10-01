var http = require('http');
var util = require('./util.js')

http.createServer(function(request,response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    console.log('Teste')
    response.end('Hello World!' + util.dateTime());


}
).listen(3600);