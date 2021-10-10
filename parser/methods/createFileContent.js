"use strict";
exports.__esModule = true;
exports.createFileContent = void 0;
var readAndWriteResponce_1 = require("./readAndWriteResponce");
var normalizeUrl = function (url) {
    //@ts-ignore
    return url.replaceAll('{', ':').replaceAll('}', '');
};
var createFileContent = function (_a) {
    var _b, _c, _d;
    var data = _a.data, method = _a.method, url = _a.url;
    var contentDataObject = Object.entries(data.responses)[0];
    var ref = ((_b = contentDataObject[1]) === null || _b === void 0 ? void 0 : _b.content) && ((_d = (_c = contentDataObject[1]) === null || _c === void 0 ? void 0 : _c.content['application/json']) === null || _d === void 0 ? void 0 : _d.schema['$ref']);
    var content = {};
    if (ref) {
        content = (0, readAndWriteResponce_1.readAndWriteData)(ref);
    }
    return "export {}\nconst router = require(\"express\").Router();\n\nrouter." + method + "('" + normalizeUrl(url) + "', function(req, res) {\n    res.status(" + contentDataObject[0] + ").json(JSON.parse('" + JSON.stringify(content) + "'));\n});\n\nmodule.exports = router";
};
exports.createFileContent = createFileContent;
