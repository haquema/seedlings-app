const express = require('express')
const router = express.Router()
const { profileGarden, addPlant } = require('../controllers/gardenController')

// GET a specific garden/plant collection
router.get('/:id', profileGarden)


// PATCH add a specific garden/plant to user collection
router.patch('/:id', addPlant)

module.exports = router