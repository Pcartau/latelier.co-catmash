const Cat = require(`${process.env.PWD}/src/CatUtils.js`);


/*---------------------------RANDOM-STRING-FOR-ID-----------------------------*/
function makeId(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


/*---------------------------ADD-CAT-TO_DB------------------------------------*/
function add(url) {
  var validImg = /([a-zA-Z0-9\s_\\.\-\(\/):])+\.(gif|jpg|jpeg|tiff|png|svg)/g;
  if (validImg.test(url)) {
    let randomId = makeId(10);
    console.log(randomId);
  } else {
    return ("Not valid image");
  }
}

module.exports.add = add;
