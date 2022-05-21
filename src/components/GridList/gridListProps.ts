import { mountProps } from "@/utils/mountProps";

const gridListProps = mountProps({
  itemWidth: String,
  itemHeight: String,
  gap: String,
  justify: String,
  alignItems: String,
  alignContent: String,
});

export { gridListProps };
