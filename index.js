
const dotenv  = require('dotenv').config(),
      express = require('express'),
      port    = process.env.PORT || process.env.APPLICATION_PORT,
      app     = express(),
      path    = require('path'),
      server  = require('http').createServer(app);

  app.use('/static', express.static(__dirname + '/assets'));
  app.use(express.static('client/dist'));
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });

  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

const io      = require('socket.io')(server),
      socket  = require('./socket/api.js')(io);
