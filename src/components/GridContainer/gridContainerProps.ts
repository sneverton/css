import { mountProps } from "@/utils/mountProps";
import type { PropType } from "vue";

const gridContainerProps = mountProps({
  areas: Array as PropType<string[][]>,
  cols: String,
  rows: String,
  gap: String,
  justify: String,
  alignItems: String,
  alignContent: String,
  autoRows: String,
  autoCols: String,
  autoFlow: String,
});

export { gridContainerProps };
