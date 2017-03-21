import * as Filter from 'deep-filter';
import * as Scheme from 'generate-schema';
import { compile } from 'json-schema-to-typescript';

export interface IJsonToTypeScript {
	(
		name: string,
		object: object,
		filter?: (value: any, property: string, subject: object) => boolean
	): string;
}

export default <IJsonToTypeScript>function (name, object, filter) {
	if (filter) {
		object = Filter(object, filter);
	}

	let scheme = Scheme.json(name, object);

	return compile(scheme);
};
