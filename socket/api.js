
module.exports = (io) => {
  io.on('connection', function (socket) {
    console.log('New connection');
  });

  console.log('Socket server ready.');
}
