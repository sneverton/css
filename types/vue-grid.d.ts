import "./shims-vue";

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

declare const VueGrid: PluginObject<never>;

export default VueGrid;
