const express = require('express');
const path = require('path');
const logger = require('./logger.js');


const app = express();

const staticOptions = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use('/public' ,express.static(path.join(global.appRootFolder, 'dist')));

app.get('/api/v1/test', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
})


module.exports = app;
