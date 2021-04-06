// Validators
export const isNumber = (value: any): number => {
	if (typeof value !== "number") {
		throw `${value} is not a number.`;
	}
	return value;
};

export const numberLimit = (min: number, max: number) => (value: number) => {
	if (value < min) throw `${value} is too low. ${min} is the minimum.`;
	if (value > max) throw `${value} is too high. ${max} is the maximum.`;
	return value;
};

// Transformers
export const numberClamp = (min: number, max: number) => (value: number) =>
	Math.min(Math.max(value, min), max);

export const numberRemap = (
	from1: number,
	to1: number,
	from2: number,
	to2: number
) => (value: number) =>
	from2 + (to2 - from2) * ((value - from1) / (to1 - from1));
