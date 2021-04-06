"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBoolean = exports.flip = exports.isFalsy = exports.isTruthy = exports.isBoolean = void 0;
// Validators
var isBoolean = function (value) {
    if (typeof value !== "boolean")
        throw value + " is not a boolean.";
    return value;
};
exports.isBoolean = isBoolean;
var isTruthy = function (value) {
    if (!value)
        throw value + " is not truthy.";
    return value;
};
exports.isTruthy = isTruthy;
var isFalsy = function (value) {
    if (value)
        throw value + " is truthy.";
    return value;
};
exports.isFalsy = isFalsy;
// Transformers
var flip = function (value) { return !value; };
exports.flip = flip;
var toBoolean = function (value) { return !!value; };
exports.toBoolean = toBoolean;
