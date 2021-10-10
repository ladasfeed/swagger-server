export {}
const router = require("express").Router();

router.get('/user/:user_id/merchant/:merchant_id/order/:order_id/document/:document_type/:document_id', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"id":36,"content":"тут base64 "}}'));
});

module.exports = router