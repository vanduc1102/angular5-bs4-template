require('dotenv').config();
global.appRootFolder = __dirname;
const Server =  require('./api/index.js');

const server = new Server();
server.start();

