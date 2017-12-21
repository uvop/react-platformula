import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as ReactNativeText, StyleSheet } from 'react-native';

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.string,
    onPress: PropTypes.func,
    pointerEvents: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    style: undefined,
    onPress: undefined,
    pointerEvents: undefined,
  };

  render() {
    const {
      children, style, onPress, pointerEvents,
    } = this.props;
    return (
      <ReactNativeText style={style} onPress={onPress} pointerEvents={pointerEvents}>
        {children}
      </ReactNativeText>
    );
  }
}

export const getCustom = ({ pointerEvents, ...style }) => {
  const {
    main: customStyle,
  } = StyleSheet.create({
    main: style,
  });

  return props => (
    <Text {...props} style={customStyle} pointerEvents={pointerEvents} />
  );
};

export default getCustom({});
