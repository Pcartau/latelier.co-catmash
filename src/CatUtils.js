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

module.exports.givePoint = givePoint;
