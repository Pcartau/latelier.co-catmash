const CatModel = require(`${process.env.PWD}/src/Cat.js`);
const Cat = require(`${process.env.PWD}/src/GivePoint.js`)

module.exports = function(app) {
  app.get('/', (req, res) => {
    CatModel.find(function (err, catsData) {
      res.render("index", {
        catsMAtchs: catsMatchs,
        catsData: JSON.stringify(catsData),
        json: true
      });
    });
  });

  app.get('/ranking', (req, res) => {
    CatModel.find(function (err, catsData) {
      res.render("ranking", {
        catsData: catsData,
        json: true
      });
    });
  });

  app.post('/vote', (req, res) => {
      Cat.givePoint(req.body.id);
  });

  app.get('*', function(req, res, next) {
    setImmediate(() => { next(new Error(`La page demandée n'existe pas`)); });
  });
}
