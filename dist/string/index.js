"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.stringReplace = exports.stringLength = exports.stringSlice = exports.toUpperCase = exports.toLowerCase = exports.stringLimit = exports.isString = void 0;
// Validators
var isString = function (value) {
    if (typeof value !== "string")
        throw value + " is not a string.";
    return value;
};
exports.isString = isString;
var stringLimit = function (min, max) { return function (value) {
    var length = value.length;
    if (length < min)
        throw "\"" + value + "\" is too short (" + length + "). " + min + " is the minimum.";
    if (length > max)
        throw "\"" + value + "\" is too long (" + length + "). " + max + " is the maximum.";
    return value;
}; };
exports.stringLimit = stringLimit;
// Transformers
var toLowerCase = function (value) { return value.toLowerCase(); };
exports.toLowerCase = toLowerCase;
var toUpperCase = function (value) { return value.toUpperCase(); };
exports.toUpperCase = toUpperCase;
var stringSlice = function (start, end) { return function (value) {
    return value.slice(start, end);
}; };
exports.stringSlice = stringSlice;
var stringLength = function (value) { return value.length; };
exports.stringLength = stringLength;
var stringReplace = function (searchValue, replaceValue) { return function (value) { return value.replace(searchValue, replaceValue); }; };
exports.stringReplace = stringReplace;
var stringify = function (value) { return value.toString(); };
exports.stringify = stringify;
