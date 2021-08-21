<template lang="pug">
.grid-list(:style="style", :class="classes")
  slot
</template>

<script lang="ts">
import Vue from "vue";
import mixin from "./mixin";
import mountProps from "../utils/mountProps";
import "../style/grid-list.css";

const propsCSS = {
  colWidth: {
    type: String,
  },
  rowHeight: {
    type: String,
  },
  gap: {
    type: String,
  },
  justify: {
    type: String,
  },
  alignItems: {
    type: String,
  },
  alignContent: {
    type: String,
  },
};

export default Vue.extend({
  name: "grid-list",
  props: mountProps(propsCSS),
  data: () => ({
    propsCSS,
  }),
  mixins: [mixin],
});
</script>
