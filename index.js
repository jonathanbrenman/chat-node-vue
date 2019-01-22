
const dotenv  = require('dotenv').config(),
      express = require('express'),
      port    = process.env.APPLICATION_PORT,
      app     = express(),
      server  = require('http').createServer(app);

  app.use('/static', express.static(__dirname + '/assets'));
  app.use(express.static(__dirname + '/client/dist'));

  server.listen(port, '0.0.0.0', () => {
    console.log(`Server started on >>> http://0.0.0.0:${port}`);
  });

const io      = require('socket.io')(server),
      socket  = require('./socket/api.js')(io);
