#!/usr/bin/env node
import {initMethod} from './methods/init'
const folderPath = process.cwd().replace(/[\\]/g, '/')
const swaggerRaw = require(folderPath+'/swagger.json')
const swagger = swaggerRaw

initMethod(swagger)