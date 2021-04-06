"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRemap = exports.numberClamp = exports.numberLimit = exports.isNumber = void 0;
// Validators
var isNumber = function (value) {
    if (typeof value !== "number") {
        throw value + " is not a number.";
    }
    return value;
};
exports.isNumber = isNumber;
var numberLimit = function (min, max) { return function (value) {
    if (value < min)
        throw value + " is too low. " + min + " is the minimum.";
    if (value > max)
        throw value + " is too high. " + max + " is the maximum.";
    return value;
}; };
exports.numberLimit = numberLimit;
// Transformers
var numberClamp = function (min, max) { return function (value) {
    return Math.min(Math.max(value, min), max);
}; };
exports.numberClamp = numberClamp;
var numberRemap = function (from1, to1, from2, to2) { return function (value) {
    return from2 + (to2 - from2) * ((value - from1) / (to1 - from1));
}; };
exports.numberRemap = numberRemap;
