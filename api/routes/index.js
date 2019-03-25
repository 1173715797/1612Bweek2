var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd');
var db = '1612B';
var col = 'week2';
var coll = 'week2-1';

/* GET home page. */
router.post('/api/find', function(req, res, next) {
    mongo.find('db', 'col', function(result) {
        if (result) {
            req.json({ code: 1, msg: '查询到了' })
        } else {
            req.json({ code: 0, msg: '没数据' })
        }
    })
});


router.post('/api/findly', function(req, res, next) {
    mongo.find('db', 'coll', function(result) {
        if (result) {
            req.json({ code: 1, msg: '查询到了' })
        } else {
            req.json({ code: 0, msg: '没数据' })
        }
    })
});


router.post('/api/insert', function(req, res, next) {
    mongo.insert('db', 'coll', req.body, function(result) {
        if (result) {
            req.json({ code: 1, msg: '添加成功' })
        } else {
            req.json({ code: 0, msg: '添加失败' })
        }
    })
})