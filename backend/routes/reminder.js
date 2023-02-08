const express = require('express')
const router = express.Router()
const sendReminder = require('../controllers/reminderController')


router.post('/', sendReminder)


module.exports = router;