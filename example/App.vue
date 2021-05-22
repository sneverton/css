<template lang="pug">
div
  grid-list(col-width="120px", row-height="120px")
    .item
    .item
    .item
    .item
    .item
</template>

<script>
import GridContainer from "./../src/components/GridContainer";
import GridItem from "./../src/components/GridItem";
import GridList from "./../src/components/GridList";

export default {
  components: {
    GridContainer,
    GridItem,
    GridList,
  },
};
</script>

<style>
body {
  margin: none;
  background: #555;
}

.item {
  height: 100%;
  background: cyan;
  border-radius: 12px;
}
</style>
