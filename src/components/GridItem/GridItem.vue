<script setup lang="ts">
import { useGridStyle } from "@/composables/useGridStyle";
import { gridItemProps } from "./gridItemProps";

const props = defineProps(gridItemProps);

const { style } = useGridStyle(props);
</script>

<template>
  <div class="grid-item" :style="style">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use "./../../style/variables" as bp;

$props: (
  "col-start": "grid-column-start",
  "col-end": "grid-column-end",
  "row-start": "grid-row-start",
  "row-end": "grid-row-end",
);

.grid-item {
  @each $prop, $style in $props {
    #{$style}: var(--grid-#{$prop});
  }

  @media screen and (min-width: bp.$sm) {
    @each $prop, $style in $props {
      #{$style}: var(--grid-#{$prop}-sm, var(--grid-#{$prop}));
    }
  }

  @media screen and (min-width: bp.$md) {
    @each $prop, $style in $props {
      #{$style}: var(
        --grid-#{$prop}-md,
        var(--grid-#{$prop}-sm, var(--grid-#{$prop}))
      );
    }
  }

  @media screen and (min-width: bp.$lg) {
    @each $prop, $style in $props {
      #{$style}: var(
        --grid-#{$prop}-lg,
        var(--grid-#{$prop}-md, var(--grid-#{$prop}-sm, var(--grid-#{$prop})))
      );
    }
  }

  @media screen and (min-width: bp.$xl) {
    @each $prop, $style in $props {
      #{$style}: var(
        --grid-#{$prop}-xl,
        var(
          --grid-#{$prop}-lg,
          var(--grid-#{$prop}-md, var(--grid-#{$prop}-sm, var(--grid-#{$prop})))
        )
      );
    }
  }
}
</style>
