import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image as RNImage, StyleSheet } from 'react-native';

class Image extends Component {
  static propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    style: PropTypes.string,
  };

  static defaultProps = {
    style: undefined,
  };

  render() {
    const { source, style } = this.props;

    return (
      <RNImage
        source={typeof source === 'string' ? { uri: source } : source}
        style={style}
      />
    );
  }
}

export const getCustom = (style) => {
  const styles = StyleSheet.create({
    main: style,
  });

  return props => (
    <Image {...props} style={styles.main} />
  );
};

export default getCustom({});
