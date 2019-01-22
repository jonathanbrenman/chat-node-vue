
const dotenv  = require('dotenv').config(),
      express = require('express'),
      port    = process.env.APPLICATION_PORT || 3000,
      app     = express(),
      server  = require('http').createServer(app);

  app.use('/static', express.static(__dirname + '/assets'));
  app.use(express.static(__dirname + '/client/dist'));

  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

const io      = require('socket.io')(server),
      socket  = require('./socket/api.js')(io);
