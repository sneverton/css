import breakpoints from "../utils/breakpoints";

const mixin = {
  data: () => ({
    breakpoint: null,
    style: {}
  }),
  methods: {
    mountStyle() {
      this.style = {};

      for (let b in breakpoints) {
        const regExp = new RegExp(`${b}$`);

        if (breakpoints[b]()) {
          for (let prop in this.$options.propsData) {
            const bp = prop.toLowerCase().match(regExp),
              mainProp = bp ? prop.slice(0, -2) : prop;

            if (typeof this.propsCSS[mainProp] === "object") {
              if (bp) {
                this.style[this.propsCSS[mainProp].name] = this.propsCSS[
                  mainProp
                ].parse(this[prop]);
              } else if (!this.style[this.propsCSS[mainProp].name]) {
                this.style[this.propsCSS[mainProp].name] = this.propsCSS[
                  mainProp
                ].parse(this[mainProp]);
              }
            } else {
              if (bp) {
                this.style[this.propsCSS[mainProp]] = this[prop];
              } else if (!this.style[this.propsCSS[mainProp]]) {
                this.style[this.propsCSS[mainProp]] = this[mainProp];
              }
            }
          }
        }
      }
    }
  },
  created() {
    this.mountStyle();

    window.addEventListener("resize", () => this.mountStyle());
  }
};

export default mixin;
