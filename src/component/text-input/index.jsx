import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput } from 'react-native';
import createCustomizableComponent from 'src/common/create-customizable-component';

class TextInput extends Component {
  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    selectTextOnFocus: PropTypes.bool,
  };

  static defaultProps = {
    keyboardType: undefined,
    value: '',
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
      <RNTextInput
        value={value}
        onChangeText={onValueChange}
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
        selectTextOnFocus={selectTextOnFocus}
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
