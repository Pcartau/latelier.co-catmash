const Cat = require(`${process.env.PWD}/src/Cat.js`);

function givePoint(id) {
  Cat.findOne({ 'cat_id': id }, "cat_votes", function (err, cat) {
    if (err) return handleError(err);
    cat.cat_votes = cat.cat_votes + 1;
    cat.save(function (err) {
      if (err) return console.error(err);
    });
  });
}

function createMatchs(cats_number) {
  var catsMatchs = [];
  for (let i = 0; i < cats_number; i++) {
    for (let j = i + 1; j < cats_number; j++) {
      catsMatchs.push(i + ":" + j);
    }
  }
  return (catsMatchs);
}

module.exports.givePoint = givePoint;
module.exports.createMatchs = createMatchs;
