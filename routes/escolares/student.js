var express = require('express');
const dbUtil = require('../mock/dbUtil');
var student = require('../mock/patient.json');
var students = require('../mock/patients.json');
var router = express.Router({ mergeParams: true });
const { uuid } = require('uuidv4');

router.get('/:id', (req, res, next) => {
    if(req.params && !req.query.mem) {
        res.status(200).send(student);
    } else {
        res.status(200).json(dbUtil.escolares.student.data.find((student) => student.id = req.params.id));
    }
});

router.get('/', (req, res, next) => {
    if(!req.query.mem) {
        res.status(200).send(students);
    } else {
        res.status(200).json(dbUtil.escolares.student);
    }
});

router.post('/', (req, res, next) => {
    const id = uuid();
    dbUtil.escolares.student.data.push({
        id,
        ...req.body
    });
    res.status(200).send(id);
});

router.put('/:id', (req, res, next) => {
    const student = dbUtil.escolares.student.data.find((student) => student.id = req.params.id);
    Object.assign(student, req.body);
    res.status(200).send();
});

router.delete('/:id', (req, res, next) => {
    dbUtil.escolares.student.data = dbUtil.escolares.student.data.filter(student => student.id !== req.params.id);
    res.status(200).send();
});

module.exports = router;