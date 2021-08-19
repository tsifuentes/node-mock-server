var express = require('express');
const dbUtil = require('../../mock/dbUtil');
var courses = require('../../mock/course.json');
var router = express.Router({ mergeParams: true });
const { uuid } = require('uuidv4');

router.get('/:id', (req, res, next) => {
    if(req.params && !req.query.mem) {
        dbUtil.escolares.course = courses;
    }
    res.status(200).json(dbUtil.escolares.course.data.find((course) => course.id = req.params.id));
});

router.get('/', (req, res, next) => {
    if(!req.query.mem) {
        res.status(200).send(courses);
    } else {
        res.status(200).json(dbUtil.escolares.course);
    }
});

router.post('/', (req, res, next) => {
    const id = uuid();
    dbUtil.escolares.course.data.push({
        id,
        ...req.body
    });
    res.status(200).send(id);
});

router.put('/:id', (req, res, next) => {
    const course = dbUtil.escolares.course.data.find((course) => course.id = req.params.id);
    Object.assign(course, req.body);
    res.status(200).send();
});

router.delete('/:id', (req, res, next) => {
    dbUtil.escolares.course.data = dbUtil.escolares.course.data.filter(course => course.id !== req.params.id);
    res.status(200).send();
});

module.exports = router;