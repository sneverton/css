import type { InstallFunction } from "types";
import components from "./components";

const install: InstallFunction = (Vue) => {
  Object.entries(components).forEach(([name, component]) =>
    Vue.component(name, component)
  );
};

export { install };
