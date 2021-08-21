import { VueConstructor } from "vue";
import GridContainer from "./GridContainer.vue";
import GridItem from "./GridItem.vue";
import GridList from "./GridList.vue";

const components: Record<string, VueConstructor> = {
  GridContainer,
  GridItem,
  GridList,
};

export { GridContainer, GridItem, GridList };

export default components;
