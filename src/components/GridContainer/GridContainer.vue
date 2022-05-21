<script setup lang="ts">
import { computed } from "vue";
import { useGridStyle } from "@/composables/useGridStyle";
import { gridContainerProps } from "./gridContainerProps";

const props = defineProps(gridContainerProps);

const slotsNames = computed(() => {
  if (!props.areas) return [];
  return [...new Set(props.areas.flat())];
});

const parseLayout = (val: typeof props.areas) =>
  val
    ?.map((row) => row.join(" "))
    .map((r) => `"${r}"`)
    .join(" ");

const propsParsed = computed(() => {
  const r: Record<string, unknown> = { ...props };

  r.areas = parseLayout(props.areas);
  r.areasSm = parseLayout(props.areasSm);
  r.areasMd = parseLayout(props.areasMd);
  r.areasXl = parseLayout(props.areasXl);
  r.areasLg = parseLayout(props.areasLg);

  return r;
});

const { style } = useGridStyle(propsParsed.value);
</script>

<template>
  <div class="grid-container" :style="style">
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

<style lang="scss">
@use "./../../style/variables" as bp;

$props: (
  "cols": "grid-template-columns",
  "rows": "grid-template-rows",
  "auto-rows": "grid-auto-rows",
  "auto-cols": "grid-auto-columns",
  "auto-flow": "grid-auto-flow",
  "areas": "grid-template-areas",
  "justify": "justify-content",
  "align-items": "align-items",
  "align-content": "align-content",
  "gap": "gap",
);

.grid-container {
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
