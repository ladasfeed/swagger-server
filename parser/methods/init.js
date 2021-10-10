"use strict";
exports.__esModule = true;
exports.initMethod = void 0;
var fs = require("fs");
var createRouterFile_1 = require("./createRouterFile");
var createRootFile_1 = require("./createRootFile");
var folderPath = process.cwd().replace(/[\\]/g, '/');
var defaultDirname = folderPath + '/dist';
var createServiceName = function (str) {
    var serviceIndexDelimiter = str.substr(1).indexOf('/') || undefined;
    return serviceIndexDelimiter != -1 ? str.substr(1, serviceIndexDelimiter) : str.substr(1);
};
var createFolder = function (path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};
var initMethod = function (data) {
    createFolder(defaultDirname);
    var arrayOfRoutersPathnames = [];
    var paths = data.paths;
    for (var keyPaths in paths) {
        var serviceNameRaw = createServiceName(keyPaths);
        var servicePathname = defaultDirname + '/' + serviceNameRaw;
        createFolder(servicePathname);
        for (var keyMethods in paths[keyPaths]) {
            //@ts-ignore
            var pathWithoutMethod = servicePathname + ("/" + keyPaths.replaceAll('/', '').replaceAll(':', ''));
            var pathWithMethod = pathWithoutMethod + '/' + keyMethods;
            createFolder(pathWithoutMethod);
            createFolder(pathWithMethod);
            (0, createRouterFile_1.createFile)({
                data: paths[keyPaths][keyMethods],
                pathname: pathWithMethod,
                method: keyMethods,
                url: keyPaths
            });
            arrayOfRoutersPathnames.push(serviceNameRaw +
                (
                //@ts-ignore
                "/" + keyPaths.replaceAll('/', '').replaceAll(':', '')) +
                '/' + keyMethods);
        }
        (0, createRootFile_1.createRootFile)({
            routes: arrayOfRoutersPathnames,
            path: './dist'
        });
    }
};
exports.initMethod = initMethod;
