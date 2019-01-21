
module.exports = (io) => {
  io.on('connection', function (socket) {
    console.log('new connection');
  });

  console.log('Socket server ready.');
}
