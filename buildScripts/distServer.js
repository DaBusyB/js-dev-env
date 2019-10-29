//this file  will configure our webserver that will serve up the files in othe src directory

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

//allows us to see file sizes when serving the app locally

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

//mock database
app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bobsmith@gmail.com"},
    {"id": 2, "firstName":"Brenda", "lastName":"Smyth", "email":"bsmyth@gmail.com"},
    {"id": 3, "firstName":"Billy", "lastName":"Smath", "email":"williamsmath@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  err ? console.log(chalk.purple(err)) : open('http://localhost:' + port)
});
