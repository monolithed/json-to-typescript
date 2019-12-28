# json-to-typescript

> Converts a JSON object to TypeScript interfaces

### Installation

```
npm install json-to-typescript --save
```

### Interface

```typescript
type Predicate = <Target extends JSONObject>(
    value: JSONValue,
    key: string,
    target: Target
) => boolean;

declare function transform <Target>(
    name: string,
    json: Target,
    filter?: Predicate
): Promise<string>;
```

### Usage

```typescript
import { transform } from 'json-to-typescript';

const json = {
    'x': 0,
    'x-1': '1',
    'y-2': '2'
};


transform('X', json);
```

**Output**

```typescript
export interface X {
 x?: number;
 "x-1"?: string;
 "y-2": string
 [x: string]: any;
}
```

#### Filter


Use the last param to filter your properties:

```typescript
import { transform } from 'json-to-typescript';

const json = {
    'x': 0,
    'x-1': '1',
    'y-2': '2'
};

const filter = (value: any) => value !== '2';

transform('X', json, filter);
```

**Output**

```typescript
export interface X {
 x?: number;
 "x-1"?: string;
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
