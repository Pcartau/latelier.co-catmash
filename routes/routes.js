module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render("index");
  });

  app.get('/ranking', (req, res) => {
    res.render("ranking");
  });

  app.get('*', function(req, res, next) {
    setImmediate(() => { next(new Error(`La page demandée n'existe pas`)); });
  });
}
