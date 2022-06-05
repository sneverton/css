import type { InstallFunction } from "types";
import components from "./components";

const install: InstallFunction = (Vue) => {
  for (const name in components) {
    Vue.component(name, components[name]);
  }
};

export { install };
