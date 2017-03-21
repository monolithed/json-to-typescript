# json-to-typescript

> Converts a JSON object to TypeScript interfaces

### Installation

```
npm install json-to-typescript --save
```

### Interface

```ts
interface IJsonToTypeScript {
	(
		name: string,
		object: object,
		filter?: (value: any, property: string, subject: object) => boolean
	): string;
}
```

### Usage

```ts
import JsonToTypeScript from 'json-to-typescript';

JsonToTypeScript('X', { x: 0, y: '0' });
```

**Output**

```ts
export interface X {
   "x"?: number;
   "y"?: string;
   [x: string]: any;
}
```

#### Filter

Use the last param to filter your interface:

```ts
import JsonToTypeScript from 'json-to-typescript';

JsonToTypeScript('X', { x: 0, y: '0' }, (value, property, subject) => {
	return property === 'x';
});
```

**Output**

```ts
export interface X {
   "x"?: number;
   [x: string]: any;
}
```

### Contributing

Feel free to submit a pull request if you find any bugs. <br />
Please make sure all commits are properly documented.

### Tests

```
npm test
```

### License

MIT
