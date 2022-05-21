<script setup lang="ts">
import { gridListProps } from "./gridListProps";
import { useGridStyle } from "@/composables/useGridStyle";
import { computed } from "vue";

const props = defineProps(gridListProps);

const parseItemWidth = (val: typeof props.itemWidth) =>
  val && `repeat(auto-fit, ${val})`;

const propsParsed = computed(() => {
  const r: Record<string, unknown> = { ...props };

  r.itemWidth = parseItemWidth(props.itemWidth);
  r.itemWidthSm = parseItemWidth(props.itemWidthSm);
  r.itemWidthMd = parseItemWidth(props.itemWidthMd);
  r.itemWidthXl = parseItemWidth(props.itemWidthXl);
  r.itemWidthLg = parseItemWidth(props.itemWidthLg);

  return r;
});

const { style } = useGridStyle(propsParsed.value);
</script>

<template>
  <div class="grid-list" :style="style">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use "./../../style/variables" as bp;

$props: (
  "item-width": "grid-template-columns",
  "item-height": "grid-auto-rows",
  "justify": "justify-content",
  "align-items": "align-items",
  "align-content": "align-content",
  "gap": "gap",
);

.grid-list {
  display: grid !important;

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
