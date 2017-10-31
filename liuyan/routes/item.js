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
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var a=req.body.title;
    var b=req.body.message;

      pool.query('SELECT * FROM liuyan',function (err,rows,fileds) {
          res.send(rows)
      })

});
router.post('/insert', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var a=req.body.title;
    var b=req.body.message;
console.log(a,b)
    pool.query("INSERT INTO liuyan(title,message) VALUES('"+a+"','"+b+"')",function (err,rows,fileds) {
        res.send(rows)
    })

});
router.post('/del', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    pool.query("DELETE FROM liuyan WHERE id="+req.body.id,function (err,rows,fileds) {
        res.send(rows)
    })

});
module.exports = router;
