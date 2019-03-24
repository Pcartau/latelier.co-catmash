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

  app.post('/vote', (req, res) => {
    if (req.body.cat1 == "true") {
      console.log(`Un point pour le chat 1 (id = ${req.body.id})`);
    } else if (req.body.cat2 == "true") {
      console.log(`Un point pour le chat 2 (id = ${req.body.id})`);
    }
  });

  app.get('*', function(req, res, next) {
    setImmediate(() => { next(new Error(`La page demandée n'existe pas`)); });
  });
}
