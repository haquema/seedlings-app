const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    latin: { type: String },
    family: { type: String },
    common: { type: Array },
    category: { type: String },
    origin: { type: String },
    climate: { type: String },
    tempmax: { celsius: { type: Number }, fahrenheit: { type: Number } },
    tempmin: { celsius: { type: Number }, fahrenheit: { type: Number } },
    ideallight: { type: String },
    toleratedlight: { type: String },
    watering: { type: String },
    insects: { type: Array },
    diseases: { type: String },
    use: { type: Array },
  },

  {
    timestamps: true,
  }
);

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
