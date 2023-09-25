const express = require('express');
const router = express.Router();
const appController = require('./src/controllers/withings');

router.get('/withings', appController.getNotifs);
router.get('/', appController.home);

module.exports = router;