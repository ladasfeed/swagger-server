import { createFileContent } from "./createFileContent.js";
import * as fs from "fs";


export const createFile = ({ data, method, pathname, url }) => {
    fs.writeFile(pathname + '/index.ts', createFileContent({
        data,
        url,
        method
    }), function (err) {
        if (err) {
            return console.log(err);
        }
    });
};
