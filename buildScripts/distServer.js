//this is not for production...just for serving app to local machine to confirm it works

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

app.listen(port, function(err) {
  err ? console.log(chalk.purple(err)) : open('http://localhost:' + port)
});
