// Validators
export const isBoolean = (value: any): boolean => {
	if (typeof value !== "boolean") throw `${value} is not a boolean.`;
	return value;
};
export const isTruthy = <T>(value: T) => {
	if (!value) throw `${value} is not truthy.`;
	return value;
};
export const isFalsy = <T>(value: T) => {
	if (value) throw `${value} is truthy.`;
	return value;
};

// Transformers

export const flip = (value: boolean) => !value;

export const toBoolean = (value: any) => !!value;
