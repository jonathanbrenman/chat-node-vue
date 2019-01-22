
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New connection');
    if(!socket.username) {
      socket.emit('askUsername', null);
    }
    socket.on('newUser', (name) => {
      socket.username = name;
      socket.broadcast.emit('newUserConnected',{
        from: 'Chatbot',
        username: name,
        message: `${socket.username} was added to chatroom`
      });
    });
    socket.on('sendMessage', (data) => {
      io.sockets.emit('newMessage',{
        from: data.username,
        message: data.message
      });
    });
  });
  console.log('Socket server ready.');
}
