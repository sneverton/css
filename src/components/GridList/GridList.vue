<script setup lang="ts">
import { CSSProps, mountedsProps } from "./gridListProps";
import { useGridStyle } from "@/composables/useGridStyle";
import { useParseProps } from "@/composables/useParseProps";

const props = defineProps(mountedsProps);

const { parsedProps } = useParseProps(props, {
  itemWidth: {
    number: (v) => `repeat(auto-fit, ${v}fr)`,
    string: (v) => `repeat(auto-fit, ${v})`,
  },
  itemHeight: {
    number: (v) => `${v}px`,
  },
  gap: {
    number: (v) => `${v}px`,
  },
});

const { style } = useGridStyle(parsedProps.value, CSSProps);
</script>

<template>
  <div class="grid-list" :style="{ ...style, display: 'grid !important' }">
    <slot></slot>
  </div>
</template>
