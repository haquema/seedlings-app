const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    img: { type: String },
    use: { type: String },
    latinName: { type: String },
    family: { type: String },
    lightTolered: { type: String },
    heightAtPurchase: { type: Number }, // in cm
    lightIdeal: { type: String },
    widthAtPurchase: { type: Number }, // in cm
    id: {
      type: String,
      required: true,
      unique: true,
    },
    widthPotential: { type: Number }, // in cm
    heightPotential: { type: Number }, // in cm
    description: { type: String },
    temperatureMax: { type: Number }, // in celsius
    watering: { type: String },
    commonName: { type: Array },
    temperatureMin: { type: Number }, // in celsius
    colorOfLeaf: { type: Array },
    climate: { type: String },
  },

  {
    timestamps: true,
  }
);

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
