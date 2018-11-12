var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lista', function (req, res, next) {
    if (req.session.logado) {
    req.getConnection(function (err, connection) {
        var query = connection.query("SELECT * FROM cliente", function (err, rows) {
            if (err)
                res.json({ status: 'ERROR', data: + err });
            else
                res.json({ status: 'OK', data: rows });
        });
        if (err)
            res.json({ status: 'ERROR', data: + err });
    });
}
    else {
        res.json({ status: 'SEMACESSO', data: 'Usuário precisa estar logado!' });
        }
});

router.post('/deleta', function (req, res, next) {
    var id = req.query.id;
    req.getConnection(function (err, connection) {
        
        var query = connection.query("DELETE FROM cliente WHERE id = " + id, function (err, rows) {
            if (err)
                res.json({ status: 'ERROR', data: + err });
            else
                res.json({ status: 'OK', data: 'Excluido com sucesso' });
        });
        if (err)
            res.json({ status: 'ERROR', data: + err });
    });
});

router.post('/insere', function (req, res, next) {
    var input = req.body;
    req.getConnection(function (err, connection) {
        var query = connection.query("INSERT INTO cliente SET ? ", input, function (err, rows) {
            if (err)
                res.json({
                    status: 'ERROR',
                    data: +err
                });
            else
                res.json({
                    status: 'OK',
                    data: 'Incluído com sucesso!'
                });
        });
    });
});

router.post('/altera', function (req, res, next) {
    var input = req.body;
    var id = req.query.id;
    req.getConnection(function (err, connection) {
        connection.query("UPDATE cliente set ? WHERE id = ? ", [input, id], function (err, rows) {
            if (err)
                res.json({ status: 'ERRO', data: + err });
            else
                res.json({ status: 'OK', data: 'Alterado com sucesso!' });
        });
    });
});

router.get('/listaCliente', function (req, res, next) {
        var id = req.query.id;
        req.getConnection(function (err, connection) {
            connection.query("SELECT * FROM cliente WHERE id = " + id, function (err, rows) {
                if (err)
                    res.json({ status: 'ERRO', data: + err });
                else
                    res.json({ status: 'OK', data: rows });
            });
            if (err)
                res.json({ status: 'ERRO', data: + err });
        });
    });

module.exports = router;
