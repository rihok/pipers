// Validators
export const isArray = <T>(value: any): T[] => {
	if (!Array.isArray(value)) throw `${value} is not an array.`;
	return value;
};

// Transformers
export const map = <T, R>(func: (value: T, index: number, arr: T[]) => R) => (
	value: T[]
): R[] => value.map(func);

export const reduce = <T, R = T>(
	reducer: (previous: R, current: T) => R,
	initialValue?: R
) => (value: T[]): R => value.reduce(reducer, initialValue as any);

export const filter = <T>(
	func: (value: T, index: number, arr: T[]) => boolean
) => (value: T[]) => value.filter(func);

export const sort = <T>(func: (a: T, b: T) => number) => (value: T[]): T[] =>
	value.sort(func);

export const reverse = <T>(value: T[]): T[] => value.reverse();

export const slice = (start: number, end: number) => <T>(value: T[]): T[] =>
	value.slice(start, end);

export const largest = reduce<number>((prev, current) =>
	current > prev ? current : prev
);

export const smallest = reduce<number>((prev, current) =>
	current < prev ? current : prev
);

export { average } from "../util/math";
