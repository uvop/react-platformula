import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

const viewStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerChild: {
    flexGrow: 1,
  },
});

export default class ScrollBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.string,
  };

  static defaultProps = {
    children: undefined,
    style: undefined,
  };

  render() {
    const { children, style } = this.props;
    return (
      <ScrollView style={viewStyles.wrapper} contentContainerStyle={viewStyles.innerChild}>
        <TouchableWithoutFeedback>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export const getCustom = (style) => {
  const styles = StyleSheet.create({
    main: style,
  });

  return props => (
    <ScrollBlock {...props} style={styles.main} />
  );
};
