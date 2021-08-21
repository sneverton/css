import { PropOptions } from "vue/types/options";

const breakpoints = ["sm", "md", "xl", "lg"];

type Props = Record<string, PropOptions>;

const mountProps = (props: Props): Props => {
  const _props: Props = {};

  for (const p in props) {
    _props[p] = { type: props[p].type, default: props[p].default };
    for (const bp of breakpoints)
      _props[`${p}-${bp}`] = {
        type: props[p].type,
        default: props[p].default,
      };
  }

  return _props;
};

export default mountProps;
