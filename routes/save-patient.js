var express = require('express');
const dbUtil = require('../mock/dbutil');
var router = express.Router();

router.post('/', (req, res, next) => {
    dbUtil.data.push({
        ...req.body
    });
    res.status(200).send();
});

module.exports = router;