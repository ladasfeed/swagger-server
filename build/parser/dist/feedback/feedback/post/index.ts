export {}
const router = require("express").Router();

router.post('/feedback', function(req, res) {
    res.status(204).json(JSON.parse('{}'));
});

module.exports = router