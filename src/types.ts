export type PromiseResult<T> = T extends Promise<infer V> ? V : T;

export type PipeFn<Input = any, Output = any> = (
	value: PromiseResult<Input>
) => Output;

export type PipeInput<Pipe> = Pipe extends PipeFn<infer V, any> ? V : any;

export type PipeOutput<Pipe> = Pipe extends PipeFn<any, infer V> ? V : any;

export type IncludesPromise<
	V0 = unknown,
	V1 = unknown,
	V2 = unknown,
	V3 = unknown,
	V4 = unknown,
	V5 = unknown,
	V6 = unknown
> = V0 extends Promise<any>
	? true
	: V1 extends Promise<any>
	? true
	: V2 extends Promise<any>
	? true
	: V3 extends Promise<any>
	? true
	: V4 extends Promise<any>
	? true
	: V5 extends Promise<any>
	? true
	: V6 extends Promise<any>
	? true
	: false;
