import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image as RNImage } from 'react-native';
import createCustomizableComponent from 'src/common/create-customizable-component';

class Image extends Component {
  static propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
  };

  render() {
    const { source, ...otherProps } = this.props;

    return (
      <RNImage
        source={typeof source === 'string' ? { uri: source } : source}
        {...otherProps}
      />
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Image);

export default BaseComponent;
export const getCustom = _getCustom;
