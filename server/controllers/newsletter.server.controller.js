var Newsletter = require('../models/changelog.server.model.js');

// CREATE function
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


// DELETE FUNCTION
exports.delete = function(req, res){

    console.log(req.params.id)
    Newsletter.findOneAndDelete({_id: req.params.id}, function(err){

        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send();
        }
    })
}

// LIST function
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