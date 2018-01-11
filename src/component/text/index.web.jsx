import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';

class Text extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {
      children,
      ...otherProps
    } = this.props;

    return (
      <div
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Text);

export default BaseComponent;
export const getCustom = _getCustom;
