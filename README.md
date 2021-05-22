## Introdução

Plugin Vue de componentes para criar sistema de grid.

## Instalação

`npm i -s @sneverton/vue-grid` or `yarn add @sneverton/vue-grid`

##### main.js

```js
import Vue from "vue";
import App from "./App.vue";
import VueGrid from "@sneverton/vue-grid";

Vue.config.productionTip = false;

Vue.use(VueGrid);

new Vue({
  store,
  render: (h) => App,
}).$mount("#app");
```
