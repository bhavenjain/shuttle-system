const express = require('express')
const router = express.Router()
const Bus = require('../controllers/bus')

router.get('/api/getbuses', Bus.getBuses)
router.post('/api/addbus', Bus.addBus)
router.post('/api/addLocation', Bus.addLocation)

module.exports = router
