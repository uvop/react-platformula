import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';
import createCustomizableComponent from 'src/common/create-customizable-component';

class Text extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <RNText
        {...otherProps}
      >
        {children}
      </RNText>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Text);

export default BaseComponent;
export const getCustom = _getCustom;
