const express = require('express')
const router = express.Router()
const {clientmessage} = require('../Controller/Controller')

router.route('/clientmessage').post(clientmessage)
module.exports = router