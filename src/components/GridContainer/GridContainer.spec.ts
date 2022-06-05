import { mount } from "@cypress/vue";
import { h } from "vue";
import GridContainer from "./GridContainer.vue";

describe("GridContainer", () => {
  it("mount", () => {
    const style = `
    body {
      margin: none;
      background: #555;
    }

    .item {
      height: 100%;
      width: 100%;
      border-radius: 12px;
    }
    .grid-area-header .item {
      background: #F44336;
    }
    .grid-area-main .item {
      background: #9C27B0;
    }
    .grid-area-side .item {
      background: #3F51B5;
    }
    .grid-area-banner .item {
      background: #009688;
    }
    .grid-area-footer .item {
      background: #FFC107;
    }
    `;

    const areas = [["header"], ["main"], ["side"], ["banner"], ["footer"]];
    const areasMd = [
      ["header", "header", "header"],
      ["main", "main", "side"],
      ["main", "main", "side"],
      ["banner", "banner", "side"],
      ["footer", "footer", "footer"],
    ];

    mount(GridContainer, {
      propsData: {
        cols: "300px",
        "cols-md": "300px 300px 300px",
        "auto-rows": "100px",
        "auto-rows-md": "200px",
        justify: "center",
        areas: areas,
        "areas-md": areasMd,
        gap: "20px",
      },
      slots: {
        header: h("div", { class: "item" }),
        main: h(GridContainer, {
          class: "item",
          cols: 2,
          rows: 2,
        }),
        banner: h("div", { class: "item" }),
        side: h("div", { class: "item" }),
        footer: h("div", { class: "item" }),
      },
      style,
    });

    cy.viewport(2560, 1440);
    cy.viewport("macbook-15");
    cy.viewport("ipad-2");
    cy.viewport("iphone-6");
  });
});
