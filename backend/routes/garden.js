const express = require('express')
const router = express.Router()
const { profileGarden, addPlant } = require('../controllers/gardenController')

// GET a specific garden/plant collection
router.get('/:id', profileGarden)

// POST add a specific garden/plant to user collection
router.post('/:id', addPlant)

module.exports = router