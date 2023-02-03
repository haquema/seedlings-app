const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
  img: { type: String },
  name: { type: String },
  knownAs: { type: String },
  description: { type: String },
  toxicTo: { type: String },
  careimg: { type: String },
  minTemp: { type: Number },
  maxTemp: { type: Number },
  habitat: { type: String },
  pruning: { type: String },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
