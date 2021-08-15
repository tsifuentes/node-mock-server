var express = require('express');
const dbUtil = require('../mock/dbutil');
var router = express.Router();
const { uuid } = require('uuidv4');

router.post('/', (req, res, next) => {
    dbUtil.data.push({
        id: uuid(),
        ...req.body
    });
    res.status(200).send();
});

module.exports = router;