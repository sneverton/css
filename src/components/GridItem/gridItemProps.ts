import { mountProps } from "@/utils/mountProps";
import type { PropType } from "vue";

const mountedsProps = mountProps({
  area: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  col: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  row: [Number, Array, String] as PropType<
    number | (string | number)[] | string
  >,
  colStart: [Number, String] as PropType<number | string>,
  colEnd: [Number, String] as PropType<number | string>,
  rowStart: [Number, String] as PropType<number | string>,
  rowEnd: [Number, String] as PropType<number | string>,
  alignSelf: String as PropType<
    "flex-start" | "flex-end" | "center" | "baseline" | "auto" | "stretch"
  >,
});

const CSSProps = {
  colStart: "grid-column-start",
  colEnd: "grid-column-end",
  rowStart: "grid-row-start",
  rowEnd: "grid-row-end",
  col: "grid-column",
  row: "grid-row",
  area: "grid-area",
  alignSelf: "align-self",
};

export { mountedsProps, CSSProps };
