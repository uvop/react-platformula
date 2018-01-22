import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';
import Block, { getCustom as getCustomBlock } from 'src/component/block';

const ImageBlock = getCustomBlock({
  flex: 1,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  flexDirection: 'inherit',
});

class BackgroundBlock extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { source, children, ...otherProps } = this.props;

    return (
      <Block {...otherProps}>
        <ImageBlock style={{ backgroundImage: `url(${source})` }}>
          {children}
        </ImageBlock>
      </Block>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(BackgroundBlock);

export default BaseComponent;
export const getCustom = _getCustom;
