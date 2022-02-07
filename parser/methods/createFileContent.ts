import {readAndWriteData} from './readAndWriteResponce'

const normalizeUrl = (url: string) => {
    //@ts-ignore
    return  url.replaceAll('{', ':').replaceAll('}', '')
}

type createFileContentType = {
    data: any,
    method: string,
    url: string
}
export const createFileContent = ({data,method,url}:createFileContentType) => {
    const contentDataObject = Object.entries(data.responses)[0] as any


    return `
const successResponse = require('./res.json')
const router = require("express").Router();

router.${method}('${normalizeUrl(url)}', function(req, res) {
    res.status(${contentDataObject[0]}).json(successResponse);
});

module.exports = router`
}

