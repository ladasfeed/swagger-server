import fs from "fs";
import {createFileContent} from "./createFileContent";

type createRootFileType = {
    routes: Array<string>,
    path: string,
}
export const createRootFile = ({routes, path}:createRootFileType) => {
    let bodyHeader: any = '';
    let bodyMain: any = '';
    routes.map((item, index) => {
        bodyHeader += `const route${index} = require('./${item}')\n`
        bodyMain += `app.use(route${index}) \n`
    })

    console.log(bodyHeader)
    fs.writeFile(
        path+'/index.ts',
        `export {}
const app = require('express')()
        
${bodyHeader}
${bodyMain}

app.listen(8000, () => {
console.log('⚡️[server]: Server is running at https://localhost:8000');
});`,
        function(err) {
            if (err) {
                return console.log(err);
            }
        }
    );
}