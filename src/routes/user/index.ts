const router = require("express").Router();
const data1 = require('./data')

router.get('/user', function(req, res) {
    res.status(200).json(data1);
});

module.exports = router