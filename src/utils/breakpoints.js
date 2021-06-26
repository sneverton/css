import config from "../config";

const { thresholds } = config;

const minWidth = w => matchMedia(`(min-width: ${w}px)`).matches;

const breakpoints = {
  xs: () => minWidth(0),
  sm: () => minWidth(thresholds.xs + 0.01),
  md: () => minWidth(thresholds.sm + 0.01),
  xl: () => minWidth(thresholds.md + 0.01),
  lg: () => minWidth(thresholds.lg + 0.01)
};

export default breakpoints;
