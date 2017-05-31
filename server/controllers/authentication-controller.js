var mongoose = require('mongoose');
var User = require('../datasets/users');

module.exports.signup = function(req, res){
    console.log('Request body ',req.body);
    var user = new User(req.body);
    user.save();
    
    res.json('User is saved!');
}

module.exports.login = function(req, res){
    User.find(req.body, function(err, results){
        if(err){
            console.log('Error Login');
        }
        
        if(results && results.length === 1){
            res.json(req.body.email);
        }
    })
}