import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import createCustomizableComponent from 'src/common/create-customizable-component';

class Block extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children, ...otherProps } = this.props;
    if (otherProps.onPress) {
      return (
        <TouchableOpacity {...otherProps}>
          {children}
        </TouchableOpacity>
      );
    }
    return (
      <View {...otherProps}>
        {children}
      </View>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Block);

export default BaseComponent;
export const getCustom = _getCustom;
