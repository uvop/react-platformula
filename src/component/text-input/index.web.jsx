import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jss from 'jss';
import jsReactToCss from 'src/common/js-react-to-css';

const rnKeyboardTypeToWeb = (keyboardType) => {
  if (keyboardType === 'numeric') {
    return 'number';
  }
  return 'text';
};

class Input extends Component {
  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    className: PropTypes.string,
    selectTextOnFocus: PropTypes.bool,
  };

  static defaultProps = {
    value: '',
    keyboardType: undefined,
    className: undefined,
    selectTextOnFocus: false,
  };

  static selectTarget(e) {
    e.target.select();
  }

  render() {
    const {
      value, onValueChange, keyboardType, className, selectTextOnFocus,
    } = this.props;
    return (
      <input
        type={rnKeyboardTypeToWeb(keyboardType)}
        className={className}
        value={value}
        onFocus={selectTextOnFocus ? Input.selectTarget : undefined}
        onChange={(e) => { onValueChange(e.target.value); }}
      />
    );
  }
}

export const getCustom = (styles) => {
  const { classes } = jss.createStyleSheet({
    main: jsReactToCss(styles),
  }).attach();

  return props => (
    <Input {...props} className={classes.main} />
  );
};

export default getCustom({});
