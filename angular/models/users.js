var users = require('../controllers/connection');
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    users.mybookusers.find(function(err, data) {
        if(err) {
            console.log(err)
        }else {
            console.log(data);
            res.send(data.json());
        }
    });
});