export {}
const router = require("express").Router();

router.delete('/user/:user_id/merchant/:merchant_id/address/:address_id', function(req, res) {
    res.status(204).json(JSON.parse('{}'));
});

module.exports = router