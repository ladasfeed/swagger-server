"use strict";
exports.__esModule = true;
exports.createFile = void 0;
var createFileContent_1 = require("./createFileContent");
var fs = require("fs");
var createFile = function (_a) {
    var data = _a.data, method = _a.method, pathname = _a.pathname, url = _a.url;
    fs.writeFile(pathname + '/index.ts', (0, createFileContent_1.createFileContent)({
        data: data,
        url: url,
        method: method
    }), function (err) {
        if (err) {
            return console.log(err);
        }
    });
};
exports.createFile = createFile;
