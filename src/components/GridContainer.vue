<template lang="pug">
.grid-container(:style="style")
  slot
</template>

<script>
import mixin from "../mixin.js";
import mountProps from "../mountProps.js";

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
};

export default {
  name: "grid-container",
  props: mountProps(Object.keys(propsCSS)),
  data: () => ({
    propsCSS,
  }),
  mixins: [mixin],
};
</script>

<style>
.grid-container {
  display: grid !important;
  gap: 20px;
}
</style>
