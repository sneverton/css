import { expect, test } from "vitest";
import { useGridStyle } from "./useGridStyle";

test("useGridStyle", () => {
  const { style } = useGridStyle({ color: "white", size: 15 });

  expect(style.value).toEqual({ "--grid-color": "white", "--grid-size": 15 });
});
