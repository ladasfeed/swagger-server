export {}
const router = require("express").Router();

router.post('/user/:user_id/merchant', function(req, res) {
    res.status(201).json(JSON.parse('{"data":{"id":45,"common_data":{"legal_name":"ИП Констатинопольский К.К.","inn":3664069337,"ogrn":1053600591197},"adminstration":{"name":"Констатинопольский Констатин Констатинович","position":"Генеральный директор","document":"articles_of_association"}}}'));
});

module.exports = router