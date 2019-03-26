const CatModel = require(`${process.env.PWD}/src/Cat.js`);
const Cat = require(`${process.env.PWD}/src/CatUtils.js`);
const NewCat = require(`${process.env.PWD}/src/AddCat.js`);

module.exports = function(app) {
  app.get('/', (req, res) => {
    CatModel.find(function (err, catsData) {
      res.render('index', {
        catsMAtchs: catsMatchs,
        catsData: JSON.stringify(catsData),
        json: true
      });
    });
  });

  app.get('/ranking', (req, res) => {
    CatModel.find(function (err, catsData) {
      res.render('ranking', {
        catsData: JSON.stringify(catsData),
        json: true
      });
    });
  });

  app.get('/addcat', (req, res) => {
    res.render('addCat');
  })

  app.post('/newCat', (req, res) => {
    if (req.body) {
      NewCat.add(req.body);
    } else {
      res.send("Erreur");
    }
  });

  app.post('/vote', (req, res) => {
      Cat.givePoint(req.body.id);
  });

  app.get('*', function(req, res, next) {
    setImmediate(() => { next(new Error(`La page demandée n'existe pas`)); });
  });
}
