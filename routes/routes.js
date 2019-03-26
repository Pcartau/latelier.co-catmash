const mongoose = require('mongoose');
const CatModel = require(`${process.env.PWD}/src/Cat.js`);
const Cat = require(`${process.env.PWD}/src/CatUtils.js`);
const NewCat = require(`${process.env.PWD}/src/AddCat.js`);
const CatUtils = require(`${process.env.PWD}/src/CatUtils.js`);

module.exports = function(app) {
  var catsMatchs = [];
  app.get('/', (req, res) => {
    mongoose.connection.db.collection('cats').countDocuments()
    .then(count => {
      catsMatchs = CatUtils.createMatchs(count);
    })
    CatModel.find(function (err, catsData) {
      res.render('index', {
        catsMatchs: catsMatchs,
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
    if (req.body.cat_url) {
      NewCat.add(req.body.cat_url);
    }
  });

  app.post('/vote', (req, res) => {
      Cat.givePoint(req.body.id);
  });

  app.get('*', function(req, res, next) {
    setImmediate(() => { next(new Error(`La page demandée n'existe pas`)); });
  });
}
