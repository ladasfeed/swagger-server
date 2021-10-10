"use strict";
exports.__esModule = true;
exports.readAndWriteData = void 0;
var swagger = require('../swagger.json');
var deepSearch = function (obj) {
    getProp(obj);
    function getProp(o) {
        for (var prop in o) {
            if (typeof (o[prop]) === 'object') {
                getProp(o[prop]);
            }
            else {
                console.log('Finite value: ' + o[prop]);
            }
        }
    }
};
var readAndWriteData = function (ref) {
    var newObj = {};
    var props = ref;
    if (typeof ref == "string") {
        var pathArray = ref.substr(2).split('/');
        var field = swagger.components.schemas[pathArray[2]];
        if (field.hasOwnProperty('type') && ['boolean', 'string', 'integer'].includes(field.type)) {
            props = field;
        }
        else {
            props = field.properties;
        }
    }
    if (props.hasOwnProperty('example')) {
        newObj = props.example;
        return newObj;
    }
    for (var key in props) {
        if (props[key].hasOwnProperty('example')) {
            newObj[key] = props[key].example;
        }
        else if (props[key].hasOwnProperty('type') && props[key].type == 'array') {
            newObj[key] = [(0, exports.readAndWriteData)(props[key].items)];
        }
        else if (props[key].hasOwnProperty('type') && props[key].type == 'object' && props[key].hasOwnProperty('properties')) {
            newObj[key] = (0, exports.readAndWriteData)(props[key].properties);
        }
        else if (key == '$ref') {
            newObj = (0, exports.readAndWriteData)(props[key]);
        }
        else if (typeof props[key] == 'object') {
            newObj[key] = (0, exports.readAndWriteData)(props[key]);
        }
        else {
            newObj[key] = props[key];
        }
    }
    return newObj;
};
exports.readAndWriteData = readAndWriteData;
var findByRef = function (ref) {
};
