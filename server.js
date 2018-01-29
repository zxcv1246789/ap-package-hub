var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var exec = require('child_process').exec,
  child;
var path = require('path');

app.set('views', [
  __dirname + '/index'
]);

var server = app.listen(80, function() {
  console.log("RaspAP server has started on port 80");
});

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  saveUninitialized: true,
  resave: false
}));

require('./router/main.js')(app, fs, url);
