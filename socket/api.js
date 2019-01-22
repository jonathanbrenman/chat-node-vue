
module.exports = (io) => {
  const moment = require('moment');
  var users    = [];

  io.on('connection', (socket) => {
    console.log('New connection');
    if(!socket.username) {
      socket.emit('askUsername', null);
    }
    socket.on('newUser', (name) => {
      var current_time = moment().format('DD-MM-YYYY HH:mm:ss');
      console.log(current_time);
      socket.username = name;
      users.push({
        username: name
      });
      io.sockets.emit('newUserConnected',{
        from: 'Chatbot',
        username: name,
        createdAt: current_time,
        users: users,
        message: `${socket.username} was added to chatroom`
      });
    });
    socket.on('sendMessage', (data) => {
      var current_time = moment().format('DD-MM-YYYY HH:mm:ss');
      io.sockets.emit('newMessage',{
        from: data.username,
        message: data.message,
        createdAt: current_time
      });
    });
  });
  console.log('Socket server ready.');
}
