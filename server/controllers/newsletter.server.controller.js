var Newsletter = require('../models/changelog.server.model.js');




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