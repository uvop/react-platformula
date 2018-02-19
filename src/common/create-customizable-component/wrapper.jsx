import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderChildren as DimensionRenderChildren } from 'src/module/dimension';

export default class NativeCustomizableWrapper extends Component {
  static propsTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {

  }
}