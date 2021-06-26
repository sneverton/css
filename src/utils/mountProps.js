import breakpoints from "./breakpoints";

const mountProps = props => {
  const _props = {};

  for (let p in props) {
    if (typeof props[p] === "string") {
      _props[p] = String;
      for (let bp in breakpoints) _props[`${p}-${bp}`] = String;
    } else {
      _props[p] = { type: props[p].type, default: props[p].default };
      for (let bp in breakpoints)
        _props[`${p}-${bp}`] = {
          type: props[p].type,
          default: props[p].default
        };
    }
  }

  return _props;
};

export default mountProps;
