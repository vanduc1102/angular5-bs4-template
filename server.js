require('dotenv').config();
global.appRootFolder = __dirname;
const Server =  require('./server/index.js');

const server = new Server();
server.start();
