export {}
const router = require("express").Router();

router.get('/bik', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"corresponding_account":"30101810400000000555","bik":"044525225","name":"ПАО Название"}}'));
});

module.exports = router