// Validators
export const isString = (value: any): string => {
	if (typeof value !== "string") throw `${value} is not a string.`;
	return value;
};

export const stringLimit = (min: number, max: number) => (value: string) => {
	const length = value.length;
	if (length < min)
		throw `"${value}" is too short (${length}). ${min} is the minimum.`;
	if (length > max)
		throw `"${value}" is too long (${length}). ${max} is the maximum.`;
	return value;
};

// Transformers
export const toLowerCase = (value: string) => value.toLowerCase();
export const toUpperCase = (value: string) => value.toUpperCase();

export const stringSlice = (start: number, end: number) => (value: string) =>
	value.slice(start, end);

export const stringLength = (value: string) => value.length;

export const stringReplace = (searchValue: string, replaceValue: string) => (
	value: string
) => value.replace(searchValue, replaceValue);

export const stringify = (value: any): string => value.toString();
