const Cat = require(`${process.env.PWD}/src/Cat.js`);

/*---------------------------GIVE-A-POINT-TO-CAT-ID---------------------------*/
function givePoint(id) {
  Cat.findOne({ 'cat_id': id }, "cat_votes", function (err, cat) {
    if (err) return handleError(err);
    cat.cat_votes = cat.cat_votes + 1;
    cat.save(function (err) {
      if (err) return console.error(err);
    });
  });
}


/*---------------------------CREATE-MATCH-ARRAY-------------------------------*/
function createMatchs(cats_number) {
  var catsMatchs = [];
  for (let firstCat = 0; firstCat < cats_number; firstCat++) {
    for (let secondCat = firstCat + 1; secondCat < cats_number; secondCat++) {
      catsMatchs.push(firstCat + ":" + secondCat);
    }
  }
  return (catsMatchs);
}

module.exports.givePoint = givePoint;
module.exports.createMatchs = createMatchs;
