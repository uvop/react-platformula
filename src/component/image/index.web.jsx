import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';

class Image extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    const {
      source,
      ...otherProps
    } = this.props;

    return (
      <img
        alt=""
        src={source}
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
