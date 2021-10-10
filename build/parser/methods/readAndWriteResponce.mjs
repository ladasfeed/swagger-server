import { createRequire } from "module";
const require = createRequire(import.meta.url);

const folderPath = process.cwd().replace(/[\\]/g, '/');
const swagger = require(`${folderPath}/swagger.json`);


const deepSearch = (obj) => {
    getProp(obj);
    function getProp(o) {
        for (let prop in o) {
            if (typeof (o[prop]) === 'object') {
                getProp(o[prop]);
            }
            else {
                console.log('Finite value: ' + o[prop]);
            }
        }
    }
};
export const readAndWriteData = (ref) => {
    let newObj = {};
    let props = ref;
    if (typeof ref == "string") {
        const pathArray = ref.substr(2).split('/');
        const field = swagger.components.schemas[pathArray[2]];
        if (field.hasOwnProperty('type') && ['boolean', 'string', 'integer'].includes(field.type)) {
            props = field;
        }
        else {
            props = field.properties;
        }
    }
    if (props.hasOwnProperty('example')) {
        newObj = props.example;
        return newObj;
    }
    for (let key in props) {
        if (props[key].hasOwnProperty('example')) {
            newObj[key] = props[key].example;
        }
        else if (props[key].hasOwnProperty('type') && props[key].type == 'array') {
            newObj[key] = [readAndWriteData(props[key].items)];
        }
        else if (props[key].hasOwnProperty('type') && props[key].type == 'object' && props[key].hasOwnProperty('properties')) {
            newObj[key] = readAndWriteData(props[key].properties);
        }
        else if (key == '$ref') {
            newObj = readAndWriteData(props[key]);
        }
        else if (typeof props[key] == 'object') {
            newObj[key] = readAndWriteData(props[key]);
        }
        else {
            newObj[key] = props[key];
        }
    }
    return newObj;
};
const findByRef = (ref) => {
};
