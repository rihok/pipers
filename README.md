# Pipers

Pipers is a helper library to create function chains, or pipes, that process a value through a series of transformations into its final value. It supports async transformations, and comes with a set of basic transform functions ready to be used. Good TypeScript support is a big goal for the library.

### Installation

`npm install pipers`

`yarn add pipers`

### Usage

```js
const displayName = pipe(
	(value) => value.toLowerCase(),
	(value) => value.replace(/ /g, ""),
	(value) => value.slice(0, 10)
);

const name = displayName("Robert Smith"); // "robertsmit"
```

## Validation

Pipe functions can throw, which will stop the chain, and can be used for data validation.

```js
const name = pipe(
	(value) => {
		if (typeof value !== "string") throw "Name was not a string";
		return value;
	},
	(value) => value.slice(0, 10),
	toCamelCase
);

try {
	const something = name("Something"); // "something"
	const somethingElse = name("Something Else"); // "somethingE"
	const notString = name(10); // throws "Name was not a string"
} catch (e) {
	console.log(e);
}
```

## Async

Pipe functions can also be asynchronous. The pipe will wait for the promise to resolve before continuing with the next transformation.

```js
const asyncPipe = pipe(
	(value) => value.toLowerCase(),
	async (value) => {
		const result = await fetch(`https://example.com/api/${value}`);
		return result.json();
	},
	console.log
);
```

```js
asyncPipe("Test"); // calls fetch with `https://example.com/api/test`
```

## Built in functions

Some Pipe functions are included with the package, and can optionally be imported. In addition, other libraries like Lodash can be used on conjunction.

```js
import {
	isString,
	toLowerCase,
	stringSlice,
	stringReplace,
} from "pipers/string";
import { camelCase } from "lodash";
import { toJSON } from "pipers/promise";

const displayName = pipe(
	toLowerCase,
	stringReplace(/ /g, ""),
	stringSlice(0, 10)
);
const name = pipe(isString, stingSlice(0, 10), camelCase);
const asyncPipe = pipe(toLowerCase, fetch, toJSON, console.log);
```

### Validators

Boolean

- isBoolean
- isFalsy
- isTruthy

Number

- isNumber
- numberLimit

String

- isString
- stringLimit

Array

- isArray

Object

- isObject

Promise

- isPromise

### Transformers

Boolean

- toBoolean
- flip

Number

- numberClamp
- numberRemap

String

- stringify
- toLowerCase
- toUpperCase
- stringSlice
- stringLength
- stringReplace

Array

- map
- filter
- reduce
- sort
- reverse
- slice

Promise

- toJSON

## TODO

- [ ] Add tests
- [ ] More documentation for built-in functions
- [ ] JS doc for all functions
- [ ] Create logo
- [ ] Set up perf testing
- [ ] Look for optimization avenues
