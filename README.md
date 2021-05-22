## Introdução

Plugin Vue de componentes para criar sistema de grid.

##### main.js

```js
import Vue from "vue";
import App from "./App.vue";
import VueGrid from "vue-grid";

Vue.config.productionTip = false;

Vue.use(VueGrid);

new Vue({
  store,
  render: (h) => App,
}).$mount("#app");
```
