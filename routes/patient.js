var express = require('express');
var router = express.Router({ mergeParams: true });
var patient = require('../mock/patient.json');
var patients = require('../mock/patients.json');

router.get('/', (req, res, next) => {
    res.status(200).send(req.params && req.params.id ? patient : patients);
});
module.exports = router;