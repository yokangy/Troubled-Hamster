var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var user = process.env.mongo_lab_user;
var password = process.env.mongo_lab_password;

var app = express();

mongoose.connect('mongodb://'+user+':'+password+'@ds045531.mongolab.com:45531/flockdocs'); // connect to mongo database named flockdocs

// configure our server with all the middleware and and routing
require('./middleware.js')(app, express);

// imports all libraries in library directory into mongo
require('./libraries/libraryController.js'); 

app.listen(port);
console.log('Server listening on ' + port);

// export our app for testing and flexibility
module.exports = app;
