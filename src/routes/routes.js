const express = require('express');
const router =  express.Router();

const RotasMarco = require('./routes');

router.use('/', RotasMarco);

module.exports = router;