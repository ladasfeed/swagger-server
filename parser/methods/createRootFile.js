"use strict";
exports.__esModule = true;
exports.createRootFile = void 0;
var fs = require("fs");
var createRootFile = function (_a) {
    var routes = _a.routes, path = _a.path;
    var bodyHeader = '';
    var bodyMain = '';
    routes.map(function (item, index) {
        bodyHeader += "const route" + index + " = require('./" + item + "')\n";
        bodyMain += "app.use(route" + index + ") \n";
    });
    fs.writeFile(path + '/index.ts', "export {}\nconst app = require('express')()\nconst cors = require('cors')\napp.use(cors())\n        \n" + bodyHeader + "\n" + bodyMain + "\n\napp.listen(8000, () => {\nconsole.log('\u26A1\uFE0F[server]: Server is running at https://localhost:8000');\n});", function (err) {
        if (err) {
            return console.log(err);
        }
    });
};
exports.createRootFile = createRootFile;
