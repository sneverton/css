import { breakpoints, matcheBreakpoint } from "./config";

const mixin = {
  data: () => ({
    style: {}
  }),
  computed: {
    matcheBreakpoint() {
      return matcheBreakpoint.media;
    }
  },
  methods: {
    mountStyle() {
      this.style = {};

      for (let b in breakpoints) {
        const regExp = new RegExp(`${b}$`);

        if (breakpoints[b]()) {
          for (let prop in this.$options.propsData) {
            const bp = prop.toLowerCase().match(regExp),
              mainProp = bp ? prop.slice(0, -2) : prop;

            if (bp) {
              this.style[this.propsCSS[mainProp]] = this[prop];
            } else {
              this.style[this.propsCSS[mainProp]] = this[mainProp];
            }
          }
        }
      }
    }
  },
  watch: {
    matcheBreakpoint() {
      this.mountStyle();
    }
  },
  created() {
    this.mountStyle();
  }
};

export default mixin;
