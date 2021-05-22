import components from "./components";

const VueGrid = (Vue) => components.forEach((c) => Vue.component(c.name, c));

export default VueGrid;
