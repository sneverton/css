import { mount } from "@cypress/vue";
import { h } from "vue";
import GridList from "./GridList.vue";

describe("GridList", () => {
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
    .item:nth-child(1) {
      background: #F44336;
    }
    .item:nth-child(2) {
      background: #9C27B0;
    }
    .item:nth-child(3) {
      background: #3F51B5;
    }
    .item:nth-child(4) {
      background: #009688;
    }
    .item:nth-child(5) {
      background: #FFC107;
    }
    `;

    mount(GridList, {
      propsData: {
        itemWidth: "300px",
        itemHeight: "300px",
        justify: "center",
        gap: "20px",
      },
      slots: {
        default: [
          h("div", { class: "item" }),
          h("div", { class: "item" }),
          h("div", { class: "item" }),
          h("div", { class: "item" }),
          h("div", { class: "item" }),
        ],
      },
      style,
    });

    cy.viewport(2560, 1440);
    cy.viewport("macbook-15");
    cy.viewport("ipad-2");
    cy.viewport("iphone-6");
  });
});
