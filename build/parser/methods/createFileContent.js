"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileContent = void 0;
const readAndWriteResponce_1 = require("./readAndWriteResponce");
const normalizeUrl = (url) => {
    //@ts-ignore
    return url.replaceAll('{', ':').replaceAll('}', '');
};
const createFileContent = ({ data, method, url }) => {
    const contentDataObject = Object.entries(data.responses)[0];
    const ref = contentDataObject[1]?.content && contentDataObject[1]?.content['application/json']?.schema['$ref'];
    let content = {};
    if (ref) {
        content = (0, readAndWriteResponce_1.readAndWriteData)(ref);
    }
    return `export {}
const router = require("express").Router();

router.${method}('${normalizeUrl(url)}', function(req, res) {
    res.status(${contentDataObject[0]}).json(JSON.parse('${JSON.stringify(content)}'));
});

module.exports = router`;
};
exports.createFileContent = createFileContent;
