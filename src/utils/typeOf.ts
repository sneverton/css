import type { PickKeys } from "ts-essentials";

export type TypeOf = {
  string: string;
  number: number;
  bigint: bigint;
  boolean: boolean;
  symbol: symbol;
  undefined: undefined;
  object: object;
  function: (...args: any[]) => any;
  array: [];
};

function typeOf<T>(target: T): PickKeys<TypeOf, T> {
  const r = Array.isArray(target) ? "array" : typeof target;

  return r as PickKeys<TypeOf, T>;
}

export { typeOf };
