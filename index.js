var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
//   console.log('Server isrunning on 8080');
// }).listen(8080);


const express = require("express")
const cors = require("cors");
const cookieSession = require("cookie-session");
const multer = require('multer');
const OS = require('os');
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;
const app = express();
app.use(express.json());
const logger = require('./utils/logger');
process.env.TZ = "Asia/Kolkata";

app.use(cors());

// database
const db = require("./app/models");
db.sequelize.sync();


// routes
require("./app/routes/auth.routes")(app);

// set port, listen for requests
const port = process.env.PORT || 8083;
app.listen(port, () => console.log(`Listening on Port: ${port}`));