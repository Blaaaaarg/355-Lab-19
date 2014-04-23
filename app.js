// Import the required packages
var express = require('express'),
    ejs = require('ejs'),
    connect = require('connect');

// Load the MVC files
var routes = require('./controller/index'),
    users = require('./controller/users');

var app = express();

app.use(connect.urlencoded());
app.use(connect.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('subtitle', 'Lab 19');

app.set('port', 8027);
app.use('/', routes);
app.use('/users', users);
app.listen(app.get('port'));
console.log('Express server listening on port', app.get('port'));
