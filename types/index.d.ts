import * as vue from "vue";

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
    autoFlow: StringConstructor;
  }>,
  () => JSX.Element,
  unknown,
  Record<string, any>,
  Record<string, any>,
  vue.ComponentOptionsMixin,
  vue.ComponentOptionsMixin,
  Record<string, any>,
  string,
  vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps,
  Readonly<
    vue.ExtractPropTypes<
      MountProps<{
        areas: vue.PropType<string[][]>;
        cols: vue.PropType<number | (string | number)[] | string>;
        rows: vue.PropType<number | (string | number)[] | string>;
        gap: vue.PropType<number | string>;
        justify: vue.PropType<
          | "flex-start"
          | "flex-end"
          | "center"
          | "space-between"
          | "space-around"
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
        autoFlow: StringConstructor;
      }>
    >
  >,
  MountProps<{
    areas: string[][];
    cols: number | (string | number)[] | string;
    rows: number | (string | number)[] | string;
    gap: number | string;
    justify:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around";
    alignItems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    alignContent:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "stretch";
    autoRows: number | (string | number)[] | string;
    autoCols: number | (string | number)[] | string;
    autoFlow: string;
  }>
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
  () => JSX.Element,
  unknown,
  Record<string, any>,
  Record<string, any>,
  vue.ComponentOptionsMixin,
  vue.ComponentOptionsMixin,
  Record<string, any>,
  string,
  vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps,
  Readonly<
    vue.ExtractPropTypes<
      MountProps<{
        itemWidth: vue.PropType<number | string>;
        itemHeight: vue.PropType<number | string>;
        gap: vue.PropType<number | string>;
        justify: vue.PropType<
          | "flex-start"
          | "flex-end"
          | "center"
          | "space-between"
          | "space-around"
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
      }>
    >
  >,
  MountProps<{
    itemWidth: number | string;
    itemHeight: number | string;
    gap: number | string;
    justify:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around";
    alignItems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    alignContent:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "stretch";
  }>
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
    alignSelf: vue.PropType<
      "flex-start" | "flex-end" | "center" | "baseline" | "auto" | "stretch"
    >;
  }>,
  () => JSX.Element,
  unknown,
  Record<string, any>,
  Record<string, any>,
  vue.ComponentOptionsMixin,
  vue.ComponentOptionsMixin,
  Record<string, any>,
  string,
  vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps,
  Readonly<
    vue.ExtractPropTypes<
      MountProps<{
        area: vue.PropType<number | (string | number)[] | string>;
        col: vue.PropType<number | (string | number)[] | string>;
        row: vue.PropType<number | (string | number)[] | string>;
        colStart: vue.PropType<number | string>;
        colEnd: vue.PropType<number | string>;
        rowStart: vue.PropType<number | string>;
        rowEnd: vue.PropType<number | string>;
        alignSelf: vue.PropType<
          "flex-start" | "flex-end" | "center" | "baseline" | "auto" | "stretch"
        >;
      }>
    >
  >,
  MountProps<{
    area: number | (string | number)[] | string;
    col: number | (string | number)[] | string;
    row: number | (string | number)[] | string;
    colStart: number | string;
    colEnd: number | string;
    rowStart: number | string;
    rowEnd: number | string;
    alignSelf:
      | "flex-start"
      | "flex-end"
      | "center"
      | "baseline"
      | "auto"
      | "stretch";
  }>
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
