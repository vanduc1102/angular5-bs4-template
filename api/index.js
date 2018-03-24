'use strict';
const app = require('./config/express.js');
const routes = require('./routes/index.js');


app.use('api/v1', routes);

app.use(function (err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send('Something broke!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;



