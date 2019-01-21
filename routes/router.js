
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      name: 'chat service',
      status: 'online'
    })
  });
}
