var express = require('express');
var router = express.Router();
// var mongojs = require('mongojs')
// // var User = require('./../controllers/connection')
// var db = mongojs('mongodb://users:users@ds157529.mlab.com:57529/vinatchatapp', ['mybookusers']); 
/* GET users listing. */
var Promise = require('bluebird');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = mongoose.connect('mongodb://users:users@ds157529.mlab.com:57529/vinatchatapp');
mongoose.Promise = global.Promise;
var users = new Schema({
  username:  String,
  email: String,
  password:   String,
  confirmpassword: String
});
var db = mongoose.model('mybookusers', users);

router.get('/', function(req, res, next) {
   db.find({},function(err, data) {
        if(err) {
            console.log(err)
        }else {
            console.log(data);
            res.send(data);
        }
    });
});



module.exports = router;
