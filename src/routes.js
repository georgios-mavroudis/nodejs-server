const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const appController = require('./controllers/withings');

jsonParser = bodyParser.json();
encodedParser = bodyParser.urlencoded({ extended: true });
router.post('/withings', encodedParser, appController.getNotifs);
router.get('/', appController.home);

module.exports = router;