import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Block extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: View.propTypes.style,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    children: undefined,
    style: undefined,
    onPress: undefined,
  };

  render() {
    const { children, style, onPress } = this.props;
    if (onPress) {
      return (
        <TouchableOpacity style={style} onPress={onPress}>
          {children}
        </TouchableOpacity>
      );
    }
    return (
      <View style={style}>
        {children}
      </View>
    );
  }
}

export const getCustom = (style) => {
  const styles = StyleSheet.create({
    main: style,
  });

  return props => (
    <Block {...props} style={styles.main} />
  );
};
