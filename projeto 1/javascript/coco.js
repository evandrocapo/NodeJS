var http = require('http');
var mysql = require('mysql');
var util = require('./util.js');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    console.log('Teste');
    response.end('Hello World! ' + util.dateTime());
}
).listen(3000); // Pode ser 8080 para aplicações em geral

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "rockstar1",
    database: "sys"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE DATABASE teste";  //cria database, tirar a var "database" quando for usar essa

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Ação : " + sql);
        console.log(result);
    });
});