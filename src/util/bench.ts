import { average } from "./math";
import { performance } from "perf_hooks";

export function benchmark(
	func: () => void,
	iterations = 10
): {
	min: number;
	max: number;
	average: number;
	toString(): string;
} {
	let min: number | null = null;
	let max: number | null = null;
	let times: number[] = [];
	for (let i = 0; i < iterations; i++) {
		const start = performance.now();
		func();
		const end = performance.now();
		const duration = end - start;
		times.push(duration);
		if (min === null || duration < min) {
			min = duration;
		}
		if (max === null || duration > max) {
			max = duration;
		}
	}
	return {
		min: min as number,
		max: max as number,
		average: average(times),
		toString() {
			return `min: ${min?.toFixed(2)}ms\nmax: ${max?.toFixed(
				2
			)}ms\navg: ${this.average.toFixed(2)}ms`;
		},
	};
}
