import {readAndWriteData} from "./readAndWriteResponce";

type createResponseJsonType = {
    data: any,
}
export const createResponseJson = ({data}: createResponseJsonType) => {
    const contentDataObject = Object.entries(data.responses)[0] as any
    const ref = contentDataObject[1]?.content && contentDataObject[1]?.content['application/json']?.schema['$ref']

    let content:any = {};
    if (ref) {
        content = readAndWriteData(ref)
    }

    return JSON.stringify(content)
}