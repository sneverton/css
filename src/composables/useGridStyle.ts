import { camelCaseToKebabCase } from "@/utils/camelCaseToKebabCase";
import { computed, type ComputedRef } from "vue";

type UseGridStyle = (props: Record<string, unknown>) => {
  style: ComputedRef<Record<string, unknown>>;
};

const useGridStyle: UseGridStyle = (props) => {
  const style = computed(() => {
    const entries = Object.entries(props).map(([prop, val]) => [
      `--grid-${camelCaseToKebabCase(prop)}`,
      val,
    ]);

    return Object.fromEntries(entries);
  });

  return {
    style,
  };
};

export { useGridStyle };
