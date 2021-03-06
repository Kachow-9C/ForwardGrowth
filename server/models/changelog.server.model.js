/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var changeLogSchema = new Schema({
    //Check out - https://mongoosejs.com/docs/guide.html
    created_at: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        reuired: true
    },
    content: {
        type: String,
        required: true,
    }
});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
changeLogSchema.pre('save', function(next) {

        var curDate = new Date();

        this.updated_at = curDate;
        if (!this.created_at)
            this.created_at = curDate;
        next();
    }
);

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var ChangeLogPost = mongoose.model('ChangeLogPost', changeLogSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = ChangeLogPost;

