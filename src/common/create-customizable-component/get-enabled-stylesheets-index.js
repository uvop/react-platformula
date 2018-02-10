import customStyleType from 'src/constant/custom-style';

const isEnabled = (type, options, props) => {
  switch (type) {
    case customStyleType.props:
      return options.test(props);
    default:
      if (__DEV__) {
        throw new Error(`Illegal type "${type}"`);
      }
      return false;
  }
};

export default (customStylesheets, props) => customStylesheets
  .reduce((enabledIndexes, { type, options }, index) => {
    if (isEnabled(type, options, props)) {
      return enabledIndexes.concat(index);
    }

    return enabledIndexes;
  }, []);
