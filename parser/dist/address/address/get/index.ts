export {}
const router = require("express").Router();

router.get('/address', function(req, res) {
    res.status(200).json(JSON.parse('{"data":{"address":[{"value":"г Воронеж, Рабочий пр-кт","unrestricted_value":"Воронежская обл, г Воронеж, Рабочий пр-кт","data":{"postal_code":"394040","region_fias_id":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","region":"Воронежская","city_fias_id":"5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1","city":"Воронеж","settlement_fias_id":"string","settlement":"string","street_fias_id":"225af9a1-c016-42d7-b2bc-efbe5b8bbc78","street":"Рабочий","house_fias_id":"string","house":"string","block_type":"string","block_type_full":"string","block":"string","flat_type":"string","flat_type_full":"string","flat":"string","flat_area":"string","building":456456}}]}}'));
});

module.exports = router