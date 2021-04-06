// Validators
export const isObject = <T>(value: any): T => {
	if (typeof value !== "object") throw `${value} is not an object.`;
	return value;
};

//Transformers
