const express = require('express');
const weatherController = require('../controllers/weather-controller');

const router = new express.Router();

router.get('/current', weatherController.getCurrentWeatherPage);

module.exports = router;
