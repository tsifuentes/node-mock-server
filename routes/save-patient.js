var express = require('express');
const dbUtil = require('../mock/dbutil');
var router = express.Router();
const { uuid } = require('uuidv4');

router.post('/', (req, res, next) => {
    const id = uuid();
    dbUtil.data.push({
        id,
        ...req.body
    });
    res.status(200).send(id);
});

module.exports = router;