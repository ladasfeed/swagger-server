#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { initMethod } from './methods/init.js';
const folderPath = process.cwd().replace(/[\\]/g, '/');
const swaggerRaw = require(folderPath + '/swagger.json');
const swagger = swaggerRaw;


initMethod(swagger);
