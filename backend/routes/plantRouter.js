const express = require('express')
const router = express.Router()
const { getAllPlants, getSinglePlant, deletePlantFromGarden } = require('../controllers/plantController')

// GET all plants
router.get('/', getAllPlants)

// GET a specific plant
router.get('/:id', getSinglePlant)


module.exports = router