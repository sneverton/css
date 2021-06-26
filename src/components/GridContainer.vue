<template lang="pug">
.grid-container(:style="style")
  div(
    v-for="area in gridAreas",
    :key="area",
    :style="{ gridArea: area }",
    :class="'grid-area-' + area"
  )
    slot(:name="area")
  slot(name="default")
</template>

<script>
import mixin from "./mixin.js";
import mountProps from "../utils/mountProps.js";

const propsCSS = {
  cols: "grid-template-columns",
  rows: "grid-template-rows",
  autoRows: "grid-auto-rows",
  autoCols: "grid-auto-columns",
  gap: "gap",
  autoFlow: "grid-auto-flow",
  justify: "justify-content",
  alignItems: "align-items",
  alignContent: "align-content",
  layout: {
    name: "grid-template-areas",
    type: Array,
    default: () => [],
    parse: (v) =>
      v
        .map((row) => row.join(" "))
        .map((r) => `"${r}"`)
        .join(" "),
  },
};

export default {
  name: "grid-container",
  props: mountProps(propsCSS),
  data: () => ({
    propsCSS,
  }),
  computed: {
    gridAreas() {
      return [...new Set(this.layout.flat())];
    },
  },
  mixins: [mixin],
};
</script>

<style>
.grid-container {
  display: grid !important;
  gap: 20px;
}
</style>
