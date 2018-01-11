import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';

const rnKeyboardTypeToWeb = (keyboardType) => {
  if (keyboardType === 'numeric') {
    return 'number';
  }
  return 'text';
};

const selectTarget = (e) => {
  e.target.select();
};

class TextInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    selectTextOnFocus: PropTypes.bool,
  };

  static defaultProps = {
    value: '',
    keyboardType: undefined,
    selectTextOnFocus: false,
  };

  render() {
    const {
      value,
      onValueChange,
      keyboardType,
      selectTextOnFocus,
      ...otherProps
    } = this.props;

    return (
      <input
        type={rnKeyboardTypeToWeb(keyboardType)}
        value={value}
        onChange={(e) => { onValueChange(e.target.value); }}
        onFocus={selectTextOnFocus ? selectTarget : undefined}
        {...otherProps}
      />
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(TextInput);

export default BaseComponent;
export const getCustom = _getCustom;
