import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent, { mapProps } from 'src/common/create-customizable-component';

class Block extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <div {...mapProps(otherProps)}>
        {children}
      </div>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Block);

export default BaseComponent;
export const getCustom = _getCustom;
