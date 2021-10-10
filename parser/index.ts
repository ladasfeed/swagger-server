#!/usr/bin/env node
const folderPath = process.cwd().replace(/[\\]/g, '/')
const swaggerRaw = require(folderPath+'/swagger.json')
const {initMethod} = require('./methods/init')
const swagger = swaggerRaw

initMethod(swagger)
