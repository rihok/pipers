export const average = (values: number[]) =>
	values.reduce((accum, value) => accum + value / values.length, 0) as number;
