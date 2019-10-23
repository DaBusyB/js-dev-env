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

app.listen(port, function(err) {
  err ? console.log(err) : open('http://localhost:' + port)
});
