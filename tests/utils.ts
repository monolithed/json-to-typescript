import {readFile} from 'fs';

export function loadFile (file: string): Promise<string> {
	return new Promise((resolve, reject) => {
		readFile(file, (error, data) => {
			if (error) {
				return reject(error.message);
			}

			const result = data.toString('utf8');

			resolve(result);
		});
	});
}
