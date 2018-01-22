import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import createCustomizableComponent from 'src/common/create-customizable-component';

const viewStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerChild: {
    flexGrow: 1,
  },
});

class ScrollBlock extends Component {
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
          <View {...otherProps}>
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
} = createCustomizableComponent(ScrollBlock);

export default BaseComponent;
export const getCustom = _getCustom;
