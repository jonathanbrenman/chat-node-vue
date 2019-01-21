
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      name: 'chat service',
      status: 'online'
    })
  });

  app.listen(port, () => {
    console.log(`Server started on >>> http://localhost:${port}`);
  });
}
