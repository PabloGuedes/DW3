const express = require('express');
const { fCalculo } = require('../controller/calculadora');
const router = express.Router();

router.post('/calculadora', fCalculo);

module.exports = router;