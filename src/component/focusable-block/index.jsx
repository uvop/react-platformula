import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';

export default class FocusableBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: View.propTypes.style,
  };

  static defaultProps = {
    children: undefined,
    style: undefined,
  };

  static handlePress() {
    Keyboard.dismiss();
  }

  render() {
    const { children, style } = this.props;

    return (
      <TouchableWithoutFeedback onPress={FocusableBlock.handlePress}>
        <View style={style}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export const getCustom = (style) => {
  const styles = StyleSheet.create({
    main: style,
  });

  return props => (
    <FocusableBlock {...props} style={styles.main} />
  );
};
