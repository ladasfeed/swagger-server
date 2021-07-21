import {swaggerType} from "../types";
const fs = require('fs');
import {createFile} from "./createRouterFile";
import {createRootFile} from "./createRootFile";
const defaultDirname = './dist'

const createServiceName = (str: string) => {
    const serviceIndexDelimiter = str.substr(1).indexOf('/') || undefined
    return serviceIndexDelimiter!=-1 ? str.substr(1, serviceIndexDelimiter) : str.substr(1)
}

const createFolder = (path: string) => {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

export const initMethod = (data: swaggerType) => {
    createFolder(defaultDirname)

    const arrayOfRoutersPathnames:Array<string> = []
    const paths = data.paths
    for (let keyPaths in paths) {
        const serviceNameRaw = createServiceName(keyPaths)
        const servicePathname = defaultDirname + '/' + serviceNameRaw

        createFolder(servicePathname)

        for (let keyMethods in paths[keyPaths]) {
            const pathWithoutMethod = servicePathname + `/${keyPaths.replaceAll('/', '')}`
            const pathWithMethod = pathWithoutMethod + '/' + keyMethods
            createFolder(pathWithoutMethod)
            createFolder(pathWithMethod)

            createFile({
                data: paths[keyPaths][keyMethods],
                pathname: pathWithMethod,
                method: keyMethods,
                url: keyPaths
            })

            arrayOfRoutersPathnames.push(
                serviceNameRaw +
                `/${keyPaths.replaceAll('/', '')}` +
                '/' + keyMethods
            )
        }

        createRootFile({
            routes: arrayOfRoutersPathnames,
            path: './dist'
        })
    }
}
