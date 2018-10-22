var http = require('http');
var util = require('./util.js');
var mySQL = require('mysql');

http.createServer(function(request,response){
    var page = '../index.html';
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Hello World!' + util.dateTime());
    console.log('Teste');
}
).listen(3600);

var conMySQL = mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rockstar1',
    database: 'sys'
});

var retornaDados = function(error,results){
   // return results.stringify(results);
   console.log(results);
};

var query = 'SELECT nome FROM pessoa';
conMySQL.query(query, retornaDados);
