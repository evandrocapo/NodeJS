var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lista', function (req, res, next) {
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
});

module.exports = router;
