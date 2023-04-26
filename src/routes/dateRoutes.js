const express = require('express');
const dateController = require('../controllers/DateController');
const router = express.Router();

router.get('/', dateController.index);

module.exports = router;