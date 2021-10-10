export {}
const router = require("express").Router();

router.get('/user/:user_id/merchant/:merchant_id/order/:order_id/document', function(req, res) {
    res.status(200).json(JSON.parse('{"data":[{"type":"object","properties":{"id":36,"order_id":78,"type":"bill","preview_image":"тут base64"}}]}'));
});

module.exports = router