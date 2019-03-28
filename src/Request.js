const mongoose = require('mongoose');
const request = require('request');
const Cat = require(`${process.env.PWD}/src/Cat.js`);

/*---------------------------FILL-DATABASE------------------------------------*/
function fillDataBase() {
  for (let cat of catsData.images) {
    var newCat = new Cat({
      cat_id: cat.id,
      cat_url: cat.url,
      cat_votes: 0
    });
    newCat.save(function (err) {
      if (err) return console.error(err);
    });
  }
}


/*---------------------------REQUEST-FUNCTION---------------------------------*/
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
            fillDataBase();
          } else {
            console.log('Erreur sur la requete vers "http://latelier.co/data/cats.json"\nstatusCode: ' + response.statusCode);
          }
        });
      }
    });
});
