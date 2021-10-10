"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMethod = void 0;
const createRouterFile_1 = require("./createRouterFile");
const createRootFile_1 = require("./createRootFile");
const fs_1 = __importDefault(require("fs"));
const folderPath = process.cwd().replace(/[\\]/g, '/');
const defaultDirname = folderPath + '/dist';
const createServiceName = (str) => {
    const serviceIndexDelimiter = str.substr(1).indexOf('/') || undefined;
    return serviceIndexDelimiter != -1 ? str.substr(1, serviceIndexDelimiter) : str.substr(1);
};
const createFolder = (path) => {
    if (!fs_1.default.existsSync(path)) {
        fs_1.default.mkdirSync(path);
    }
};
const initMethod = (data) => {
    createFolder(defaultDirname);
    const arrayOfRoutersPathnames = [];
    const paths = data.paths;
    for (let keyPaths in paths) {
        const serviceNameRaw = createServiceName(keyPaths);
        const servicePathname = defaultDirname + '/' + serviceNameRaw;
        createFolder(servicePathname);
        for (let keyMethods in paths[keyPaths]) {
            //@ts-ignore
            const pathWithoutMethod = servicePathname + `/${keyPaths.replaceAll('/', '').replaceAll(':', '')}`;
            const pathWithMethod = pathWithoutMethod + '/' + keyMethods;
            createFolder(pathWithoutMethod);
            createFolder(pathWithMethod);
            (0, createRouterFile_1.createFile)({
                data: paths[keyPaths][keyMethods],
                pathname: pathWithMethod,
                method: keyMethods,
                url: keyPaths
            });
            arrayOfRoutersPathnames.push(serviceNameRaw +
                //@ts-ignore
                `/${keyPaths.replaceAll('/', '').replaceAll(':', '')}` +
                '/' + keyMethods);
        }
        (0, createRootFile_1.createRootFile)({
            routes: arrayOfRoutersPathnames,
            path: './dist'
        });
    }
};
exports.initMethod = initMethod;
