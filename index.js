
const dotenv  = require('dotenv').config(),
      express = require('express'),
      app     = express(),
      server  = require('http').createServer(app)
      io      = require('socket.io')(server),
      port    = process.env.APPLICATION_PORT,
      router  = require('./routes/router.js')(app),
      socket  = require('./socket/api.js')(io);
