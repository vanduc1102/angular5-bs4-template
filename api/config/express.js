const express = require('express');
const path = require('path');
const logger = require('./logger.js');
const compression = require('compression');
const helmet = require('helmet');



const app = express();
app.use(compression());
app.disable('x-powered-by');
app.use(helmet());

app.use(express.static(path.join(global.appRootFolder, 'dist')));
app.use('/media', express.static(path.join(global.appRootFolder, 'media')));

app.get('/api/v1/test', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
})


module.exports = app;
