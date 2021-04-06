"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = exports.isPromise = void 0;
var isPromise = function (value) {
    if (!(value instanceof Promise)) {
        throw value + " is not a promise.";
    }
    return value;
};
exports.isPromise = isPromise;
var toJSON = function (value) { return value.json(); };
exports.toJSON = toJSON;
