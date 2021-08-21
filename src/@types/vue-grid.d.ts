export interface VueGridComponent extends Vue {
  propsCSS: Record<string, any>;
  [key: string]: any;
}

export interface Mixin {
  computed: {
    style(this: VueGridComponent): Record<string, any>;
    classes(this: VueGridComponent): Record<string, any>;
  };
}
