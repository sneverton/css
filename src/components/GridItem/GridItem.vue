<script setup lang="ts">
import { useGridStyle } from "@/composables/useGridStyle";
import { useParseProps } from "@/composables/useParseProps";
import { CSSProps, mountedsProps } from "./gridItemProps";

const props = defineProps(mountedsProps);

const { parsedProps } = useParseProps(props, {
  area: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}` : c)).join(" / "),
    number: (v) => v.toString(),
  },
  col: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}` : c)).join(" / "),
  },
  row: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}` : c)).join(" / "),
  },
});

const { style } = useGridStyle(parsedProps.value, CSSProps);
</script>

<template>
  <div class="grid-item" :style="style">
    <slot></slot>
  </div>
</template>
