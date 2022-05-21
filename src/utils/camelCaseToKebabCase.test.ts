import { expect, test } from "vitest";
import { camelCaseToKebabCase } from "./camelCaseToKebabCase";

test("camelCaseToKebabCase", () => {
  expect(camelCaseToKebabCase("camelCaseToKebabCase")).toBe(
    "camel-case-to-kebab-case"
  );
});
