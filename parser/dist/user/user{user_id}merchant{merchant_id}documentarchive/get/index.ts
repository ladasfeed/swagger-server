export {}
const router = require("express").Router();

router.get('/user/:user_id/merchant/:merchant_id/document:archive', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"archive":"тут base64"}}'));
});

module.exports = router