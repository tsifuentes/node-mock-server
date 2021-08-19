var express = require('express');
const dbUtil = require('../../mock/dbUtil');
var grades = require('../../mock/grade.json');
var router = express.Router({ mergeParams: true });
const { uuid } = require('uuidv4');

router.get('/:id', (req, res, next) => {
    if(req.params && !req.query.mem) {
        dbUtil.escolares.grade = grades;
    }
    res.status(200).json(dbUtil.escolares.grade.data.find((grade) => grade.id = req.params.id));
});

router.get('/', (req, res, next) => {
    if(!req.query.mem) {
        res.status(200).send(grades);
    } else {
        res.status(200).json(dbUtil.escolares.grade);
    }
});

router.post('/', (req, res, next) => {
    const id = uuid();
    dbUtil.escolares.grade.data.push({
        id,
        ...req.body
    });
    res.status(200).send(id);
});

router.put('/:id', (req, res, next) => {
    const grade = dbUtil.escolares.grade.data.find((grade) => grade.id = req.params.id);
    Object.assign(grade, req.body);
    res.status(200).send();
});

router.delete('/:id', (req, res, next) => {
    dbUtil.escolares.grade.data = dbUtil.escolares.grade.data.filter(grade => grade.id !== req.params.id);
    res.status(200).send();
});

module.exports = router;