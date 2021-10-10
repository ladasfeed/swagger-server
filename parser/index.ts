#!/usr/bin/env node
const folderPath = process.cwd().replace(/[\\]/g, '/')
const swaggerRaw = require(folderPath+'/swagger.json')
const {initMethod} = require('./methods/init')
const { exec } = require("child_process");
const swagger = swaggerRaw

initMethod(swagger)

console.log('Success')
exec(`cd ${folderPath}/dist && npm install express cors --save-dev`,  (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})
