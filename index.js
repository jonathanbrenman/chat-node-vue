
const dotenv  = require('dotenv').config(),
      express = require('express'),
      port    = process.env.APPLICATION_PORT,
      app     = express(),
      server  = require('http').createServer(app);

  server.listen(port, () => {
    console.log(`Server started on >>> http://localhost:${port}`);
  });

const io      = require('socket.io')(server),
      router  = require('./routes/router.js')(app),
      socket  = require('./socket/api.js')(io);
