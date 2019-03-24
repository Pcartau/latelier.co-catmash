const Cat = require(`${process.env.PWD}/src/Cat.js`);

module.exports = function(app) {
  app.get('/', (req, res) => {
    Cat.find(function (err, catsData) {
      res.render("index", {
        catsMAtchs: catsMatchs,
        catsData: JSON.stringify(catsData),
        json: true
      });
    });
  });

  app.get('/ranking', (req, res) => {
    Cat.find(function (err, catsData) {
      res.render("ranking", {
        catsData: catsData,
        json: true
      });
    });
  });

  app.get('*', function(req, res, next) {
    setImmediate(() => { next(new Error(`La page demandée n'existe pas`)); });
  });
}
