var express = require('express');
const dbUtil = require('../mock/dbutil');
var router = express.Router({ mergeParams: true });
var patient = require('../mock/patient.json');
var patients = require('../mock/patients.json');

router.get('/', (req, res, next) => {
    if(req.params && !req.query.mem) {
        res.status(200).send(req.params && req.params.id ? patient : patients);
    } else {
        if(req.params.id) {
            res.status(200).json(dbUtil.data.find((patient) => patient.id = req.params.id));
        } else {
            res.status(200).json(dbUtil);
        }
    }
});
module.exports = router;