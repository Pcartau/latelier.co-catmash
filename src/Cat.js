const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new mongoose.Schema({
  cat_id: { type: String, unique:true },
  cat_url: String,
  cat_votes: Number
});

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;
