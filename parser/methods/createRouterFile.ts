import {createFileContent} from "./createFileContent";
import * as fs from "fs";
import {createResponseJson} from "./createResponseJson";

type createFileType = {
    data: any,
    pathname: string,
    method: string,
    url: string
}
export const createFile = ({data, method, pathname, url}:createFileType) => {
    fs.writeFile(
        pathname+'/index.js',
        createFileContent({
            data,
            url,
            method
        }),
        function(err) {
            if (err) {
                return console.log(err);
            }
        }
    );
    fs.writeFile(
        pathname+'/res.json',
        createResponseJson({
            data,
        }),
        function(err) {
            if (err) {
                return console.log(err);
            }
        }
    );
}