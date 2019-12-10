'use strict'

// This is the code to initialize the MongoDB server

var fs = require('fs'),
    mongoose = require('mongoose'),
    Newsletter = require('./models/changelog.server.model.js'),
    config = require('./config/config.js'),
    data = require('./models/sampleNewsData.json');



let db = mongoose.connect(config.db.uri, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).catch(error=> handleError(error));


for(var i = 0; i < data.entries.length; i++){

    var newsletter = Newsletter(data.entries[i]);
    newsletter.save(function(err){
        if(err){
            console.log(i);
            throw err;
        }
    });
}
setTimeout(function() {mongoose.disconnect()}, 5000)