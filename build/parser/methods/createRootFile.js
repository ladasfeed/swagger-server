import * as fs from "fs";


export const createRootFile = ({ routes, path }) => {
    let bodyHeader = '';
    let bodyMain = '';
    routes.map((item, index) => {
        bodyHeader += `const route${index} = require('./${item}')\n`;
        bodyMain += `app.use(route${index}) \n`;
    });
    fs.writeFile(path + '/index.ts', `export {}
const app = require('express')()
const cors = require('cors')
app.use(cors())
        
${bodyHeader}
${bodyMain}

app.listen(8000, () => {
console.log('⚡️[server]: Server is running at https://localhost:8000');
});`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
};
