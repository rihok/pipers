export const isPromise = <T>(value: any): T => {
	if (!(value instanceof Promise)) {
		throw `${value} is not a promise.`;
	}
	return value as any;
};

export const toJSON = (value: Response) => value.json();
