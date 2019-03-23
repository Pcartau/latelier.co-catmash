/*---------------------------REQUIREMENTS-------------------------------------*/
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


/*---------------------------DATABASE-------------------------------------*/

const Cat = require(`${process.env.PWD}/src/Cat.js`)
mongoose.connect('mongodb://localhost:27017/latelier', {
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


/*---------------------------SERVER-------------------------------------------*/
app.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
