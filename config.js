import Vue from "vue";

const thresholds = {
  lg: 1920,
  md: 1280,
  sm: 960,
  xs: 600
};

const mediaMatches = {
  xsOnly: matchMedia(`(max-width: ${thresholds.xs}px)`),
  smOnly: matchMedia(
    `(min-width: ${thresholds.xs + 0.01}px) and (max-width: ${thresholds.sm}px)`
  ),
  smAndUp: matchMedia(`(min-width: ${thresholds.xs + 0.01}px)`),
  mdOnly: matchMedia(
    `(min-width: ${thresholds.sm + 0.01}px) and (max-width: ${thresholds.md}px)`
  ),
  mdAndUp: matchMedia(`(min-width: ${thresholds.sm + 0.01}px)`),
  lgOnly: matchMedia(
    `(min-width: ${thresholds.md + 0.01}px) and (max-width: ${thresholds.lg}px)`
  ),
  lgAndUp: matchMedia(`(min-width: ${thresholds.md + 0.01}px)`),
  xlOnly: matchMedia(`(min-width: ${thresholds.lg + 0.01}px)`)
};

const breakpoints = {
  xs: () => mediaMatches.xsOnly.matches,
  sm: () => mediaMatches.smAndUp.matches,
  md: () => mediaMatches.mdAndUp.matches,
  lg: () => mediaMatches.lgAndUp.matches,
  xl: () => mediaMatches.xlOnly.matches
};

const matcheBreakpoint = Vue.observable({ media: null });

[
  mediaMatches.xsOnly,
  mediaMatches.smOnly,
  mediaMatches.mdOnly,
  mediaMatches.lgOnly,
  mediaMatches.xlOnly
].forEach(m => (m.onchange = e => (matcheBreakpoint.media = e.target)));

export { breakpoints, matcheBreakpoint };
