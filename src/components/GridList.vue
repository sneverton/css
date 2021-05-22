<template lang="pug">
.grid-list(:style="style")
  slot
</template>

<script>
import mixin from "../mixin.js";
import mountProps from "../mountProps.js";

const propsCSS = {
  gap: "gap",
  colWidth: "--col-width",
  rowHeight: "--row-height",
};

export default {
  name: "grid-list",
  props: mountProps(Object.keys(propsCSS)),
  data: () => ({
    propsCSS,
  }),
  mixins: [mixin],
};
</script>

<style>
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--col-width));
  grid-auto-rows: var(--row-height);
  gap: 20px;
  width: 100%;
  justify-content: center;
}
</style>
