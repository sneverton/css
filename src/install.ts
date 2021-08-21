import { PluginFunction } from "vue";
import components from "./components";

const install: PluginFunction<never> = (Vue) => {
  for (const name in components) Vue.component(name, components[name]);
};

export default install;
