//this file  will configure our webserver that will serve up the files in othe src directory

var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
  err ? console.log(err) : open('http://localhost:' + port)
});
