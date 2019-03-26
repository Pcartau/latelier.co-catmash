const Cat = require(`${process.env.PWD}/src/CatUtils.js`);

function add(url) {
  var validImg = /([a-zA-Z0-9\s_\\.\-\(\/):])+\.(gif|jpg|jpeg|tiff|png|svg)/g;
  if (validImg.test(url)) {
    console.log("valid img");
  } else {
    return ("Not valid image");
  }
}

module.exports.add = add;
