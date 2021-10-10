export {}
const router = require("express").Router();

router.get('/price', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"rush_coefficient":1.5,"price":[{"id":45,"category_name":"Сукно","category_api_name":"c265195d-df69-4ec2-bc12-2a5cf44c200b","crm_id":1061621,"products":[{"id":39,"product_name":"сукно настольное","product_api_name":"c265195d-df69-4ec2-bc12-2a5cf44c200b","crm_id":1061621,"unit":"kilogram","price":36.2}]}]}}'));
});

module.exports = router