<template lang="pug">
.grid-item(:style="style", :class="classes")
  slot
</template>

<script lang="ts">
import Vue from "vue";
import mixin from "./mixin";
import mountProps from "../utils/mountProps";
import "../style/grid-item.css";

const propsCSS = {
  colStart: {
    type: String,
  },
  colEnd: {
    type: String,
  },
  rowStart: {
    type: String,
  },
  rowEnd: {
    type: String,
  },
};

export default Vue.extend({
  name: "grid-item",
  props: mountProps(propsCSS),
  data: () => ({
    propsCSS,
  }),
  mixins: [mixin],
});
</script>
