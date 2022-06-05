import { ref, type Ref } from "vue";

const breakpointsMedia = {
  Xl: `(min-width: 1904px)`,
  Lg: `(min-width: 1264.001px)`,
  Md: `(min-width: 960.001px)`,
  Sm: `(min-width: 600.001px)`,
  Xs: `(min-width: 0px)`,
};

const breakpointsRefs: Record<string, Ref<boolean>> = {
  Xl: ref(false),
  Lg: ref(false),
  Md: ref(false),
  Sm: ref(false),
  Xs: ref(false),
};

const entries = Object.entries(breakpointsMedia) as [string, string][];

const medias = entries.map(([name, value]) => {
  const mediaQueryList: MediaQueryList = window.matchMedia(value);

  breakpointsRefs[name].value = mediaQueryList.matches;

  mediaQueryList.onchange = (e) => (breakpointsRefs[name].value = e.matches);

  return [name, mediaQueryList];
});

const useMedia = () => breakpointsRefs;

export { useMedia };
