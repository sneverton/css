import * as vue from "vue";
import { GridList } from "./GridList";
import { GridItem } from "./GridItem";

declare type Breakpoints = "Sm" | "Md" | "Xl" | "Lg";

export declare type Props = Record<string, any>;

export declare type MountProps<PP extends Props> = PP & {
  [K in keyof PP as `${string & K}${Breakpoints}`]: PP[K];
};

export declare const GridContainer: vue.DefineComponent<
  MountProps<{
    areas: vue.PropType<string[][]>;
    cols: vue.PropType<number | (string | number)[] | string>;
    rows: vue.PropType<number | (string | number)[] | string>;
    gap: vue.PropType<number | string>;
    justify: vue.PropType<
      "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
    >;
    alignItems: vue.PropType<
      "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
    >;
    alignContent: vue.PropType<
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "stretch"
    >;
    autoRows: vue.PropType<number | (string | number)[] | string>;
    autoCols: vue.PropType<number | (string | number)[] | string>;
    autoFlow: string;
  }>,
  () => JSX.Element
>;

export declare const GridList: vue.DefineComponent<
  MountProps<{
    itemWidth: vue.PropType<number | string>;
    itemHeight: vue.PropType<number | string>;
    gap: vue.PropType<number | string>;
    justify: vue.PropType<
      "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
    >;
    alignItems: vue.PropType<
      "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
    >;
    alignContent: vue.PropType<
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "stretch"
    >;
  }>,
  () => JSX.Element
>;

export declare const GridItem: vue.DefineComponent<
  MountProps<{
    area: vue.PropType<number | (string | number)[] | string>;
    col: vue.PropType<number | (string | number)[] | string>;
    row: vue.PropType<number | (string | number)[] | string>;
    colStart: vue.PropType<number | string>;
    colEnd: vue.PropType<number | string>;
    rowStart: vue.PropType<number | string>;
    rowEnd: vue.PropType<number | string>;
    alignSelf: PropType<
      "flex-start" | "flex-end" | "center" | "baseline" | "auto" | "stretch"
    >;
  }>,
  () => JSX.Element
>;

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    GridContainer: typeof GridContainer;
    GridList: typeof GridList;
    GridItem: typeof GridItem;
  }
}

export type InstallFunction = (Vue: vue.App) => void;

export declare const VueGridPlugin: { install: InstallFunction };

export default VueGridPlugin;
