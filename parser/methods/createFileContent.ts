import {readAndWriteData} from './readAndWriteResponce'
import {log} from "util";

const normalizeUrl = (url: string) => {
    return  url.replaceAll('{', ':').replaceAll('}', '')
}

type createFileContentType = {
    data: any,
    method: string,
    url: string
}
export const createFileContent = ({data,method,url}:createFileContentType) => {
    const contentDataObject = Object.entries(data.responses)[0] as any
    const ref = contentDataObject[1]?.content && contentDataObject[1]?.content['application/json']?.schema['$ref']



    let content:any = {};
    if (ref) {
        content = readAndWriteData(ref)
    }

    return `export {}
const router = require("express").Router();

router.${method}('${normalizeUrl(url)}', function(req, res) {
    res.status(${contentDataObject[0]}).json(JSON.parse('${JSON.stringify(content)}'));
});

module.exports = router`
}

