import { mountProps } from "@/utils/mountProps";
import type { PropType } from "vue";

const mountedsProps = mountProps({
  areas: Array as PropType<string[][]>,
  cols: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  rows: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  gap: [Number, String] as PropType<number | string>,
  justify: String as PropType<
    "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
  >,
  alignItems: String as PropType<
    "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
  >,
  alignContent: String as PropType<
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch"
  >,
  autoRows: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  autoCols: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  autoFlow: String,
});

const CSSProps: Record<string, string> = {
  cols: "grid-template-columns",
  rows: "grid-template-rows",
  autoRows: "grid-auto-rows",
  autoCols: "grid-auto-columns",
  autoFlow: "grid-auto-flow",
  areas: "grid-template-areas",
  justify: "justify-content",
  alignItems: "align-items",
  alignContent: "align-content",
  gap: "gap",
};

export { mountedsProps, CSSProps };
