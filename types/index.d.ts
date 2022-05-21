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
    cols: StringConstructor;
    rows: StringConstructor;
    gap: StringConstructor;
    justify: StringConstructor;
    alignItems: StringConstructor;
    alignContent: StringConstructor;
    autoRows: StringConstructor;
    autoCols: StringConstructor;
    autoFlow: StringConstructor;
  }>,
  () => JSX.Element
>;

export declare const GridList: vue.DefineComponent<
  MountProps<{
    itemWidth: StringConstructor;
    itemHeight: StringConstructor;
    gap: StringConstructor;
    justify: StringConstructor;
    alignItems: StringConstructor;
    alignContent: StringConstructor;
  }>,
  () => JSX.Element
>;

export declare const GridItem: vue.DefineComponent<
  MountProps<{
    colStart: StringConstructor;
    colEnd: StringConstructor;
    rowStart: StringConstructor;
    rowEnd: StringConstructor;
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
