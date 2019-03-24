const mongoose = require('mongoose');
const Cat = require('../../src/Cat.js');

describe('Requete a la DB...', () => {
  it('Doit trouver la table', function(done) {
    mongoose.connect('mongodb://localhost:27017/latelier', {
      useNewUrlParser: true
    }).then(() => {
      Cat.find(function (err, catsData) {
        if (err) {
          done(err);
        }
        if (catsData) {
          done();
        } else {
          done("La table n'as pas été correctement trouvée")
        }
      });
    });
  });
})
