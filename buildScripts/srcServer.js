//this file  will configure our webserver that will serve up the files in othe src directory

import express from 'express';
import path from 'path';
import open from 'open';

//*after configuring in config file, set up dev server to serve webpack bundle
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();

//*tells express to use webpack middleware
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

//mock database
app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bobsmith@gmail.com"},
    {"id": 2, "firstName": "Brenda", "lastName": "Smyth", "email": "bsmyth@gmail.com"},
    {"id": 2, "firstName": "Billy", "lastName": "Smath", "email": "williamsmath@gmail.com"}
  ])
})

app.listen(port, function(err) {
  err ? console.log(err) : open('http://localhost:' + port)
});
