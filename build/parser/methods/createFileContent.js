import { readAndWriteData } from './readAndWriteResponce.mjs';


const normalizeUrl = (url) => {
    //@ts-ignore
    return url.replaceAll('{', ':').replaceAll('}', '');
};


export const createFileContent = ({ data, method, url }) => {
    const contentDataObject = Object.entries(data.responses)[0];
    const ref = contentDataObject[1]?.content && contentDataObject[1]?.content['application/json']?.schema['$ref'];
    let content = {};
    if (ref) {
        content = readAndWriteData(ref);
    }
    return `export {}
const router = require("express").Router();

router.${method}('${normalizeUrl(url)}', function(req, res) {
    res.status(${contentDataObject[0]}).json(JSON.parse('${JSON.stringify(content)}'));
});

module.exports = router`;
};
