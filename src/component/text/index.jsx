import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as ReactNativeText } from 'react-native';
import createCustomizableComponent, { mapProps } from 'src/common/create-customizable-component';

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <ScrollView style={viewStyles.wrapper} contentContainerStyle={viewStyles.innerChild}>
        <TouchableWithoutFeedback>
          <View style={stylesheet}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Text);

export default BaseComponent;
export const getCustom = _getCustom;
