'use strict';
const app = require('./config/express.js');


class Server{
  start(){
    app.listen(3000, () => console.log('Example app listening on port 3000!'));
  }
}

module.exports = Server;



