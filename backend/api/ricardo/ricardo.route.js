const express = require('express')
const ricardoController = require('./ricardo.controller')

const router = express.Router()

router.route('/').get(ricardoController.listRicardosConfirmed)

module.exports = router
