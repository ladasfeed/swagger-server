export {}
const router = require("express").Router();

router.post('/user/:user_id/merchant/:merchant_id/event', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"id":36,"periodicity":"everyweek","start_date":{"description":"Дата первого события","type":"string","format":"date-time"},"next_date":{"description":"Дата следующего события","type":"string","format":"date-time"},"merchant_id":45,"orders":[{"id":45,"event_id":37,"created_at":{"type":"string","format":"date-time"},"status":"in_processing","products":[{"type":"object","properties":{"product_name":"Белье постельное фасонное, сложное (вышивка, рюши)","execution_time":"48 часов","product_api_name":"c265195d-df69-4ec2-bc12-2a5cf44c200b","category_name":"вышивка, рюши","category_api_name":"c265195d-df69-4ec2-bc12-2a5cf44c200b","unit":"kilogram","count":30,"amount":12000,"comment":"Не принят в стирку"}}],"is_rush":true,"send_date":{"type":"string","format":"date-time"}}]}}'));
});

module.exports = router