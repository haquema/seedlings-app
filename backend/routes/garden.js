const express = require('express')
const router = express.Router()
const { profileGarden, addPlant,deletePlantFromGarden } = require('../controllers/gardenController')

// GET a specific garden/plant collection
router.get('/:id', profileGarden)


// PATCH add a specific garden/plant to user collection
router.patch('/:id', addPlant)

//DELETE to delete specific plant from user garden
router.delete('/:userid/:plantid', deletePlantFromGarden)

module.exports = router