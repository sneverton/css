import { Mixin } from "../@types/vue-grid";

const mixin: Mixin = {
  computed: {
    style() {
      const style: Record<string, any> = {},
        regExp = /(Sm|Md|Xl|Lg)$/;

      for (const prop in this.$options.propsData) {
        const bp = prop.match(regExp),
          mainProp = bp ? prop.slice(0, -2) : prop;

        const key = "--grid-" + prop.replace(/([A-Z])/g, "-$1").toLowerCase();

        style[key] = this.propsCSS[mainProp].parse
          ? this.propsCSS[mainProp].parse(this[prop])
          : this[prop];
      }

      return style;
    },
    classes(): string[] {
      const classes: string[] = [];

      for (const prop in this.$options.propsData) {
        classes.push("grid-" + prop.replace(/([A-Z])/g, "-$1").toLowerCase());
      }

      return classes;
    },
  },
};

export default mixin;
