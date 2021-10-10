export {}
const router = require("express").Router();

router.get('/user/:user_id/merchant/:merchant_id/address/:address_id', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"id":45,"type":"delivery","full_address":"Воронеж, у ленина д 1","fias_id":"225af9a1-c016-42d7-b2bc-efbe5b8bbc78"}}'));
});

module.exports = router