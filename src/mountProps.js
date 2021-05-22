import { breakpoints } from "./config";

const mountProps = (props) => {
  const _props = {};

  for (let p of props) {
    _props[p] = String;
    for (let bp in breakpoints) _props[`${p}-${bp}`] = String;
  }

  return _props;
};

export default mountProps;
