const mongoose = require('mongoose');
const request = require('request');
const Cat = require(`${process.env.PWD}/src/Cat.js`);


/*---------------------------UTILS-FUNCTIONS----------------------------------*/
function fillDataBase() {
  for (let cat of catsData.images) {
    var newCat = new Cat({
      cat_id: cat.id,
      cat_url: cat.url,
      cat_score: 0
    });
    newCat.save(function (err) {
      if (err) return console.error(err);
    });
  }
}

function createMatchs(cats_number) {
  for (let i = 0; i < cats_number; i++) {
    for (let j = i + 1; j < cats_number; j++) {
      catsMatchs.push(i + ":" + j);
    }
  }
}


/*---------------------------REQUEST-BLOC-------------------------------------*/
mongoose.connection.once('open', () => {
  mongoose.connection.db.collection('cats').countDocuments()
    .then(count => {
      if (!count) {
        request('http://latelier.co/data/cats.json', function (error, response, body) {
          if (error) {
            throw new Error(error);
          }
          if (response && response.statusCode == 200) {
            catsData = JSON.parse(body);
            let cats_number = Object.keys(catsData.images).length;
            fillDataBase();
            createMatchs(cats_number);
          } else {
            console.log('Erreur sur la requete vers "http://latelier.co/data/cats.json"\nstatusCode: ' + response.statusCode);
          }
        });
      } else {
        createMatchs(count);
      }
    });
});
