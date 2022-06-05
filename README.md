## Introdução

Plugin Vue de componentes para utilizar Grid Layout.

## Instalar
```bash
yarn add @sneverton/vue-grid
```

```js
import { createApp } from 'vue'
import VueGrid from "@sneverton/vue-grid";

const app = createApp({})

app.use(VueGrid)
```

## Componentes
Todas as propiedades dos componentes podem ser utilizadas com pontos de interrupção adicionando `-{breakpoint}` no final para `sm`, `md`, `lg` e `xl`.

**Exemplo:**
```html
<grid-container cols="auto" cols-sm="auto max-content"></grid-container>
```

### `GridContainer`
Nome | Tipo
--- | ---
areas | string[][]
cols | number \| (string \| number)[] \| string"
rows | number \| (string \| number)[] \| string
gap | number \| string
justify | "flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around"
alignItems | "flex-start" \| "flex-end" \| "center" \| "baseline" \| "stretch"
alignContent | "flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around" \| "stretch"
autoRows | number \| (string \| number)[] \| string
autoCols | number \| (string \| number)[] \| string
autoFlow | string;

### `GridList`
Nome | Tipo
--- | ---
itemWidth | number \| string
itemHeight | number \| string
gap | number \| string
justify | "flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around"
alignItems | "flex-start" \| "flex-end" \| "center" \| "baseline" \| "stretch"
alignContent | "flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around" \| "stretch"


### `GridItem`
Nome | Tipo
--- | ---
area | number \| (string \| number)[] \| string
col | number \| (string \| number)[] \| string
row | number \| (string \| number)[] \| string
colStart | number \| string
colEnd | number \| string
rowStart | number \| string
rowEnd | number \| string
alignSelf | "flex-start" \| "flex-end" \| "center" \| "baseline" \| "auto" \| "stretch"
