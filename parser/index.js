#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var init_1 = require("./methods/init");
var folderPath = process.cwd().replace(/[\\]/g, '/');
var swaggerRaw = require(folderPath + '/swagger.json');
var swagger = swaggerRaw;
(0, init_1.initMethod)(swagger);
