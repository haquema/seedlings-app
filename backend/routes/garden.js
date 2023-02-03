const express = require('express')
const router = express.Router()
const { profileGarden } = require('../controllers/gardenController')

// GET a specific garden/plant collection
router.get('/:id', profileGarden)


module.exports = router