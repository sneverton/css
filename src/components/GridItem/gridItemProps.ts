import { mountProps } from "@/utils/mountProps";

const gridItemProps = mountProps({
  colStart: String,
  colEnd: String,
  rowStart: String,
  rowEnd: String,
});

export { gridItemProps };
