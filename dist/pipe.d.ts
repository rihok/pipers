import { IncludesPromise, PipeFn, PromiseResult } from "./types";
export default function pipe<Input, Output>(...pipes: [PipeFn<Input, Output>]): (value: Input) => IncludesPromise<Input, Output> extends true ? Promise<PromiseResult<Output>> : Output;
export default function pipe<Input, V0, Output>(...pipes: [PipeFn<Input, V0>, PipeFn<V0, Output>]): (value: Input) => IncludesPromise<Input, V0, Output> extends true ? PromiseResult<PromiseResult<Output>> : Output;
export default function pipe<Input, V0, V1, Output>(...pipes: [PipeFn<Input, V0>, PipeFn<V0, V1>, PipeFn<V1, Output>]): (value: Input) => IncludesPromise<Input, V0, V1, Output> extends true ? Promise<PromiseResult<Output>> : Output;
export default function pipe<Input, V0, V1, V2, Output>(...pipes: [
    PipeFn<Input, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, Output>
]): (value: Input) => IncludesPromise<Input, V0, V1, V2, Output> extends true ? Promise<PromiseResult<Output>> : Output;
export default function pipe<Input, V0, V1, V2, V3, Output>(...pipes: [
    PipeFn<Input, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, Output>
]): (value: Input) => IncludesPromise<Input, V0, V1, V2, V3, Output> extends true ? Promise<PromiseResult<Output>> : Output;
export default function pipe<Input, V0, V1, V2, V3, V4, Output>(...pipes: [
    PipeFn<Input, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, Output>
]): (value: Input) => IncludesPromise<Input, V0, V1, V2, V3, V4, Output> extends true ? Promise<PromiseResult<Output>> : Output;
