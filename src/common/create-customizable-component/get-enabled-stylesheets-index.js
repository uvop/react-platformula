import customStyleType from 'src/constant/custom-style';

export default (customStylesheets, props) => customStylesheets
  .filter(({ type, options }) => {
    if (type === customStyleType.props) {
      const { test } = options;
      return test(props);
    }
    return false;
  })
  .map((_, i) => i);
