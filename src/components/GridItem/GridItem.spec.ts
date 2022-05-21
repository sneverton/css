import { mount } from "@cypress/vue";
import { h } from "vue";
import GridContainer from "../GridContainer/GridContainer.vue";
import GridItem from "./GridItem.vue";

describe("GridItem", () => {
  it("mount", () => {
    const style = `
    body {
      margin: none;
      background: #555;
    }

    .grid-item {
      height: 100%;
      width: 100%;
      border-radius: 12px;
    }
    .grid-item:nth-child(1) {
      background: #F44336;
    }
    .grid-item:nth-child(2) {
      background: #9C27B0;
    }
    .grid-item:nth-child(3) {
      background: #3F51B5;
    }
    .grid-item:nth-child(4) {
      background: #009688;
    }
    .grid-item:nth-child(5) {
      background: #FFC107;
    }
    `;

    mount(GridContainer, {
      propsData: {
        cols: "300px",
        "cols-md": "300px 300px 300px",
        "auto-rows": "100px",
        "auto-rows-md": "200px",
        justify: "center",
        gap: "20px",
      },
      slots: {
        default: [
          h(GridItem, {
            cosStartMd: "1",
            colEndMd: "span 3",
          }),
          h(GridItem, {
            cosStartMd: "1",
            colEndMd: "span 2",
            rowStartMd: "2",
            rowEndMd: "span 2",
          }),
          h(GridItem, {
            cosStartMd: "3",
            rowStartMd: "2",
            rowEndMd: "span 3",
          }),
          h(GridItem, {
            cosStartMd: "1",
            colEndMd: "span 2",
            rowStartMd: "4",
          }),
          h(GridItem, {
            cosStartMd: "1",
            colEndMd: "span 3",
            rowStartMd: "5",
          }),
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
