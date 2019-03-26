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
  return Cat.findOne({ 'cat_id': id })
  .then((cat) => {
    if (!cat) {
      return (true);
    } else {
      return (false);
    }
  })
}


/*---------------------------TEST-FOR-ID--------------------------------------*/
function createCat(id, url) {
  var newCat = new Cat({
    cat_id: id,
    cat_url: url,
    cat_votes: 0
  });
  newCat.save(function (err) {
    if (err) return console.error(err);
  });
}


/*---------------------------ADD-CAT-TO_DB------------------------------------*/
async function add(url) {
  var validImg = /([a-zA-Z0-9\s_\\.\-\(\/):])+\.(gif|jpg|jpeg|tiff|png|svg)/g;
  if (validImg.test(url)) {
    let randomId = makeId(16);
    var checkId = await testId(randomId);
    while (checkId == false) {
      randomId = makeId(16);
      checkId = await testId(randomId);
    }
    console.log(url, randomId);
    createCat(randomId, url);
  } else {
    return ("Not valid image");
  }
}

module.exports.add = add;
