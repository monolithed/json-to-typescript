import * as assert from 'assert';
import {loadFile} from './utils';
import {transform} from '../';

const SOURCE_FILE = `${__dirname}/./assets/interface.ts`;

describe('Convert JSON to TS', () => {
	it('Basic conversion', async () => {
		const expected = await loadFile(SOURCE_FILE);

		const json = {
			'x': 0,
			'x-1': '1',
			'y-2': '2'
		};

		const filter = (value: any) => value !== '2';

		const actual = await transform('X', json, filter);

		assert.equal(actual, expected);
	});
});
