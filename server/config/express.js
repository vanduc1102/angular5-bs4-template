const express = require('express');
const path = require('path');
const logger = require('./logger.js');


const app = express();

app.use('/',express.static(path.join('../', 'src')));

app.use(function (err, req, res, next) {
  logger.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = app;

