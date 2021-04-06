"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmark = void 0;
var math_1 = require("./math");
var perf_hooks_1 = require("perf_hooks");
function benchmark(func, iterations) {
    if (iterations === void 0) { iterations = 10; }
    var min = null;
    var max = null;
    var times = [];
    for (var i = 0; i < iterations; i++) {
        var start = perf_hooks_1.performance.now();
        func();
        var end = perf_hooks_1.performance.now();
        var duration = end - start;
        times.push(duration);
        if (min === null || duration < min) {
            min = duration;
        }
        if (max === null || duration > max) {
            max = duration;
        }
    }
    return {
        min: min,
        max: max,
        average: math_1.average(times),
        toString: function () {
            return "min: " + (min === null || min === void 0 ? void 0 : min.toFixed(2)) + "ms\nmax: " + (max === null || max === void 0 ? void 0 : max.toFixed(2)) + "ms\navg: " + this.average.toFixed(2) + "ms";
        },
    };
}
exports.benchmark = benchmark;
