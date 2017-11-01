var express = require('express');
var router = express.Router();

var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'baobei'
})

/* GET home page. */
router.post('/du', function(req, res, next) {
    var q=req.body.id;
    console.log(q);
  res.header('Access-Control-Allow-Origin','*');
    pool.query(`SELECT * FROM search WHERE name LIKE '%${q}%' OR detail LIKE '%${q}%'`,function (err,rows) {
        res.send(rows)

    })
});

module.exports = router;
