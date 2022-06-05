import { expect, test } from "vitest";
import { typeOf } from "./typeOf";

test("typeOf", () => {
  expect(typeOf([])).toBe("array");
  expect(typeOf("")).toBe("string");
  expect(typeOf(undefined)).toBe("undefined");
});
