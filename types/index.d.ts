declare module 'generate-schema';

type JSONPrimitive = string | number | boolean | null;
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

type JSONObject = {
    [member: string]: JSONValue
};

interface JSONArray extends Array<JSONValue> {}

declare module 'deep-filter' {
    type Predicate = <Target extends JSONObject>(value: JSONValue, key: string, target: Target) => boolean;

    function deepFilter<Target>(json: Target, filter: Predicate): Target;
    export = deepFilter;
}
