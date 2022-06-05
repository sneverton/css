<script setup lang="ts">
import { computed } from "vue";
import { useParseProps } from "@/composables/useParseProps";
import { CSSProps, mountedsProps } from "./gridContainerProps";
import { useGridStyle } from "@/composables/useGridStyle";

const props = defineProps(mountedsProps);

const { parsedProps } = useParseProps(props, {
  areas: {
    array: (v: string[][]) =>
      v
        .map((row) => row.join(" "))
        .map((r) => `"${r}"`)
        .join(" "),
  },
  cols: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}fr` : c)).join(" "),
    number: (v) => `repeat(${v}, 1fr)`,
  },
  rows: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}fr` : c)).join(" "),
    number: (v) => `repeat(${v}, 1fr)`,
  },
  gap: {
    number: (v) => `${v}px`,
  },
  autoRows: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}fr` : c)).join(" "),
    number: (v) => `${v}fr`,
  },
  autoCols: {
    array: (v: (string | number)[]) =>
      v.map((c) => (typeof c === "number" ? `${c}fr` : c)).join(" "),
    number: (v) => `${v}fr`,
  },
});

const slotsNames = computed(() => {
  if (!props.areas) return [];
  return [...new Set(props.areas.flat())];
});

const { style } = useGridStyle(parsedProps.value, CSSProps);
</script>

<template>
  <div class="grid-container" :style="{ ...style, display: 'grid !important' }">
    <div
      v-for="name in slotsNames"
      :key="name"
      :style="{ gridArea: name }"
      :class="'grid-area-' + name"
    >
      <slot :name="name"></slot>
    </div>
    <slot name="default"></slot>
  </div>
</template>
