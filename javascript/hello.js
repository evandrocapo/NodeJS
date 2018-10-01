var http = require('http');
var util = require('./util.js');
var mySQL = require('mysql');

http.createServer(function(request,response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Hello World!' + util.dateTime());
    console.log('Teste');
}
).listen(3600);

var conMySQL = mySQL.createConnection({
    host: 'esparta',
    port: 3306,
    user: 'patriciadados',
    password: 'dados',
    database: 'patricia'
});

var retornaDados = function(error,results){
    return result.stringfy(result);
};

var query = 'SELECT * FROM pessoa';
conMySQL.query(query, retornaDados);