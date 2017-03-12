var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://users:users@ds157529.mlab.com:57529/vinatchatapp', ['mybookusers']); 
// var Schema = mongoose.Schema;
// var users = new Schema({
//     username: String,
//     email : String,
//     password : String,
//     confirmpassword : String
// });
console.log('test msg in connection.js');
// var User = mongoose.model('db', users);
module.exports = User;