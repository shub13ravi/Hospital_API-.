const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/api/v1/home_controller.js')
router.use('/api', require('./api'));
router.get('/', homecontroller.home)
module.exports = router;

