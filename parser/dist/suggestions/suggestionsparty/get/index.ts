export {}
const router = require("express").Router();

router.get('/suggestions/party', function(req, res) {
    res.status(200).json(JSON.parse('{"data":[{"suggestions":[{"value":"ПАО СБЕРБАНК","unrestricted_value":"ПАО СБЕРБАНК","data":[{"kpp":"773601001","capital":null,"management":[{"name":"Греф Герман Оскарович","post":"ПРЕЗИДЕНТ, ПРЕДСЕДАТЕЛЬ ПРАВЛЕНИЯ","disqualified":null}],"founders":null,"managers":null,"branch_type":"MAIN","branch_count":88,"source":null,"qc":null,"hid":"145a83ab38c9ad95889a7b894ce57a97cf6f6d5f42932a71331ff18606edecc6","type":"LEGAL","state":[{"status":"ACTIVE","actuality_date":1564012800000,"registration_date":677376000000,"liquidation_date":null}],"opf":[{"type":"2014","code":"12247","full":"Публичное акционерное общество","short":"ПАО"}],"name":[{"full_with_opf":"ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО СБЕРБАНК РОССИИ","short_with_opf":"ПАО СБЕРБАНК","latin":null,"full":"СБЕРБАНК РОССИИ","short":"СБЕРБАНК"}],"inn":"7707083893","ogrn":"1027700132195","okpo":null,"okved":"64.19","okveds":null,"authorities":null,"documents":null,"licenses":null,"finance":null,"address":[{"value":"г Москва, ул Вавилова, д 19","unrestricted_value":"117312, г Москва, Академический р-н, ул Вавилова, д 19","data":[{"value":"..."}]}],"phones":null,"emails":null,"ogrn_date":"1029456000000","okved_type":"2014","employee_count":null}]}]}]}'));
});

module.exports = router