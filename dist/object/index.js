"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
// Validators
var isObject = function (value) {
    if (typeof value !== "object")
        throw value + " is not an object.";
    return value;
};
exports.isObject = isObject;
//Transformers
