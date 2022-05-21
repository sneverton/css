import { expect, test } from "vitest";
import { mountProps } from "./mountProps";

test("mountProps", () => {
  expect(mountProps({ name: String, value: Number })).toEqual({
    name: String,
    nameLg: String,
    nameMd: String,
    nameSm: String,
    nameXl: String,
    value: Number,
    valueLg: Number,
    valueMd: Number,
    valueSm: Number,
    valueXl: Number,
  });
});
