const Plant = require('../models/plant_model')
const mongoose = require('mongoose')

// GET all plants
const getAllPlants = async (req, res) => {
  const plants = await Plant.find({})

  res.status(200).json(plants)
}


// GET a single plant
const getSinglePlant = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "We don't have this plant" })
  }

  const plant = await Plant.findById(id)

  if (!plant) {
    return res.status(404).json( {error: "We don't have this plant" })
  }

  res.status(200).json(plant)
}

module.exports = {
  getAllPlants,
  getSinglePlant
}