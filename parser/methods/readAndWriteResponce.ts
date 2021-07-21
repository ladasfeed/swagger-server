import {log} from "util";

const swagger = require('../swagger.json')

const deepSearch = (obj: any) => {
    getProp(obj);

    function getProp(o) {
        for (let prop in o) {
            if (typeof(o[prop]) === 'object') {
                getProp(o[prop]);
            } else {
                console.log('Finite value: '+o[prop])
            }
        }
    }
}

export const readAndWriteData = (ref: string | Object) => {
    let newObj:any = {}
    let props:any = ref

    if (typeof ref == "string") {
        const pathArray = ref.substr(2).split('/')
        if (ref == '#/components/schemas/userId') {
            console.log(pathArray)
            console.log(swagger.components.schemas.userId)
        }
        const field = swagger.components.schemas[pathArray[2]]

        if (field.hasOwnProperty('type') && ['boolean', 'string', 'integer'].includes(field.type)) {
            props = field
        } else {
            props = field.properties as any
        }
    }

    if (ref == '#/components/schemas/userId') {
        console.log(props)
        console.log(ref)
    }

    if (props.hasOwnProperty('example')) {
        newObj = props.example
        return newObj
    }

    for (let key in props) {
        if (props[key].hasOwnProperty('example')) {
            newObj[key] = props[key].example
        }
        else if (props[key].hasOwnProperty('type') && props[key].type == 'array') {
            newObj[key] = [readAndWriteData(props[key].items)]
        }
        else if (props[key].hasOwnProperty('type') && props[key].type == 'object' && props[key].hasOwnProperty('properties')) {
            newObj[key] = readAndWriteData(props[key].properties)
        }
        else if (key == '$ref') {
            newObj = readAndWriteData(props[key])
        }
        else if (typeof props[key] == 'object') {
            newObj[key] = readAndWriteData(props[key])
        }
        else {
            newObj[key] = props[key]
        }
    }

    return newObj
}

const findByRef = (ref: string) => {

}