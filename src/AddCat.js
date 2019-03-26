const Cat = require(`${process.env.PWD}/src/Cat.js`);


/*---------------------------RANDOM-STRING-FOR-ID-----------------------------*/
function makeId(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

/*---------------------------TEST-FOR-ID--------------------------------------*/

function testId(id) {
  Cat.findOne({ 'cat_id': id }, function (err, cat) {
    if (err) return (handleError(err));
    if (!cat) {
      console.log("Pas de chat av cet ID");
    } else {
      console.log(cat);
    }
  });
}


/*---------------------------ADD-CAT-TO_DB------------------------------------*/
function add(url) {
  var validImg = /([a-zA-Z0-9\s_\\.\-\(\/):])+\.(gif|jpg|jpeg|tiff|png|svg)/g;
  if (validImg.test(url)) {
    let randomId = makeId(10);
    console.log(randomId);
    testId("tt");
  } else {
    return ("Not valid image");
  }
}

module.exports.add = add;
