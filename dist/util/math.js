"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
var average = function (values) {
    return values.reduce(function (accum, value) { return accum + value / values.length; }, 0);
};
exports.average = average;
