import { mountProps } from "@/utils/mountProps";
import type { PropType } from "vue";

const mountedsProps = mountProps({
  itemWidth: [Number, String] as PropType<number | string>,
  itemHeight: [Number, String] as PropType<number | string>,
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
});

const CSSProps = {
  itemWidth: "grid-template-columns",
  itemHeight: "grid-auto-rows",
  justify: "justwify-content",
  alignItems: "align-items",
  alignContent: "align-content",
  gap: "gap",
};

export { mountedsProps, CSSProps };
