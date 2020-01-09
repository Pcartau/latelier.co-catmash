/*---------------------------REQUIREMENTS-------------------------------------*/
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require(`${process.env.PWD}/src/Global.js`);


/*---------------------------DATABASE-------------------------------------*/
let password = process.env.MONGO_PASS || require(`${process.env.PWD}/src/mongoPass.js`);
let uri = `mongodb+srv://admin:${password}@cluster0-2fmt7.gcp.mongodb.net/test?retryWrites=true`;

mongoose.connect(uri, {
  useNewUrlParser: true
});


/*---------------------------MIDDLEWARES--------------------------------------*/
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))


/*---------------------------ROUTES-------------------------------------------*/
require(`${process.env.PWD}/routes/routes.js`)(app);


/*---------------------------ERROR-HANDLER------------------------------------*/
app.use(function(error, req, res, next) {
  res.json({
    message: error.message
  });
});


/*---------------------------REQUEST------------------------------------------*/
require(`${process.env.PWD}/src/Request.js`);


/*---------------------------SERVER-------------------------------------------*/
app.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
