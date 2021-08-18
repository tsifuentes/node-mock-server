var express = require('express');
const dbUtil = require('../mock/dbutil');
var router = express.Router({ mergeParams: true });
var patient = require('../mock/patient.json');
var patients = require('../mock/patients.json');
const { uuid } = require('uuidv4');

router.get('/:id', (req, res, next) => {
    if(req.params && !req.query.mem) {
        res.status(200).send(patient);
    } else {
        res.status(200).json(dbUtil.citame.patient.data.find((patient) => patient.id = req.params.id));
    }
});

router.get('/', (req, res, next) => {
    if(!req.query.mem) {
        res.status(200).send(patients);
    } else {
        res.status(200).json(dbUtil.citame.patient);
    }
});

router.post('/', (req, res, next) => {
    const id = uuid();
    dbUtil.citame.patient.data.push({
        id,
        ...req.body
    });
    res.status(200).send(id);
});

router.put('/:id', (req, res, next) => {
    const patient = dbUtil.citame.patient.data.find((patient) => patient.id = req.params.id);
    Object.assign(patient, req.body);
    res.status(200).send();
});

router.delete('/:id', (req, res, next) => {
    dbUtil.citame.patient.data = dbUtil.citame.patient.data.filter(patient => patient.id !== req.params.id);
    res.status(200).send();
});

module.exports = router;