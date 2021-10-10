export {}
const router = require("express").Router();

router.get('/user/:user_id/merchant/:merchant_id/document', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"items_count":45,"items":[{"type":"object","properties":{"id":36,"type":"bill","date":{"description":"Дата создания документа","type":"string","format":"date-time"},"preview_image":"тут base64"}}]}}'));
});

module.exports = router