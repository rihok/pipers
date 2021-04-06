"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.smallest = exports.largest = exports.slice = exports.reverse = exports.sort = exports.filter = exports.reduce = exports.map = exports.isArray = void 0;
// Validators
var isArray = function (value) {
    if (!Array.isArray(value))
        throw value + " is not an array.";
    return value;
};
exports.isArray = isArray;
// Transformers
var map = function (func) { return function (value) { return value.map(func); }; };
exports.map = map;
var reduce = function (reducer, initialValue) { return function (value) { return value.reduce(reducer, initialValue); }; };
exports.reduce = reduce;
var filter = function (func) { return function (value) { return value.filter(func); }; };
exports.filter = filter;
var sort = function (func) { return function (value) {
    return value.sort(func);
}; };
exports.sort = sort;
var reverse = function (value) { return value.reverse(); };
exports.reverse = reverse;
var slice = function (start, end) { return function (value) {
    return value.slice(start, end);
}; };
exports.slice = slice;
exports.largest = exports.reduce(function (prev, current) {
    return current > prev ? current : prev;
});
exports.smallest = exports.reduce(function (prev, current) {
    return current < prev ? current : prev;
});
var math_1 = require("../util/math");
Object.defineProperty(exports, "average", { enumerable: true, get: function () { return math_1.average; } });
