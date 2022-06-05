import { computed, type ComputedRef } from "vue";
import { useMedia } from "./useMedia";

type UseGridStyle = (
  props: Record<string, string | undefined>,
  CSSProps: Record<string, string>
) => {
  style: ComputedRef<Record<string, string>>;
};

const regexps: Record<string, RegExp> = {
  Xl: /Xl$/,
  Lg: /Lg$/,
  Md: /Md$/,
  Sm: /Sm$/,
  Xs: /[^(Sm|Md|Lg|Xl)]$/,
};

const breakpoints = useMedia();

const useGridStyle: UseGridStyle = (props, CSSProps) => {
  const style = computed(() => {
    const style: Record<string, string> = {};

    for (const key in props) {
      const val = props[key];

      if (!val) continue;
      for (const bp in regexps) {
        if (breakpoints[bp].value && regexps[bp].test(key)) {
          const removedSufix = key.replace(/(Sm|Md|Lg|Xl)/, "");

          style[CSSProps[removedSufix]] = val;
        }
      }
    }

    return style;
  });

  return {
    style,
  };
};

export { useGridStyle };
