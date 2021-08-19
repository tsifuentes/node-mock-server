var express = require('express');
const dbUtil = require('../../mock/dbutil');
var router = express.Router({ mergeParams: true });
const { uuid } = require('uuidv4');

router.get('/:id', (req, res, next) => {
    res.status(200).json(dbUtil.escolares.teacher.data.find((teacher) => teacher.id = req.params.id));
});

router.get('/', (req, res, next) => {
    res.status(200).json(dbUtil.escolares.teacher);
});

router.post('/', (req, res, next) => {
    const id = uuid();
    dbUtil.escolares.teacher.data.push({
        id,
        ...req.body
    });
    res.status(200).send(id);
});

router.put('/:id', (req, res, next) => {
    const teacher = dbUtil.escolares.teacher.data.find((teacher) => teacher.id = req.params.id);
    Object.assign(teacher, req.body);
    res.status(200).send();
});

router.delete('/:id', (req, res, next) => {
    dbUtil.escolares.teacher.data = dbUtil.escolares.teacher.data.filter(teacher => teacher.id !== req.params.id);
    res.status(200).send();
});

module.exports = router;