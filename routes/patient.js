var express = require('express');
var router = express.Router();
var patient = require('../mock/patient.json')
router.get('/', (req, res, next) => {
    res.status(200).send(patient);
});
module.exports = router;