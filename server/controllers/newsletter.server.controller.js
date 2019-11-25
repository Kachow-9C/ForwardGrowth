var Newsletter = require('../models/changelog.server.model.js');


exports.create = function(req, res) {
    var newsletter = new Newsletter(req.body);
    console.log(newsletter)
    newsletter.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        else{
            res.json(newsletter)
        }
    })
}

exports.list = function(req, res){
    Newsletter.find(function(err, data){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.json(data)
        }
    })
}