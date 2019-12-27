import deepFilter from 'deep-filter';
import Scheme from 'generate-schema';
import { compile } from 'json-schema-to-typescript';

type Predicate = Parameters<typeof deepFilter>[1];

export function transform <Target>(name: string, json: Target, filter?: Predicate): Promise<string> {
	if (filter) {
		json = deepFilter<Target>(json, filter);
	}

	const scheme = Scheme.json(name, json);

	return compile(scheme, name);
}
