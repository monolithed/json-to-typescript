import * as assert from 'assert';
import JsonToTypeScript from '../';

assert.equal(JsonToTypeScript('X', { x: 0, y: '0' }), `export interface X {
  "x"?: number;
  "y"?: string;
  [k: string]: any;
}`);

assert.equal(JsonToTypeScript('X', { x: 0, y: '0' }, (value, property, subject) => {
	return property === 'x';
}), `export interface X {
  "x"?: number;
  [k: string]: any;
}`);
