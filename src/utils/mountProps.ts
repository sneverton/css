import { Breakpoints } from "@/enums/Breakpoints";
import type { MountProps, Props } from "types";

const breakpoints = Object.values(Breakpoints);

const mountProps = function <PP extends Props>(props: PP): MountProps<PP> {
  const mountedProps = Object.entries(props).reduce((r, [key, val]) => {
    r[key] = val;

    breakpoints.forEach((bp) => (r[`${key}${bp}`] = val));

    return r;
  }, {} as Props);

  return mountedProps as MountProps<PP>;
};

export { mountProps };
