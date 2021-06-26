import components from "./components/index.js";
import config from "./config.js";

const install = (Vue, preset) => {
  (c => (c = Object.assign(c, preset)))(config);

  if (config.global)
    for (let name in components) Vue.component(name, components[name]);
};

export default install;
