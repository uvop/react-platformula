import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';
import Block, { getCustom as getCustomBlock } from 'src/component/block';
import { getCustom as getCustomImage } from 'src/component/image';

const ImageContainerBlock = getCustomBlock({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const Image = getCustomImage({
  position: 'absolute',
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
});

class BackgroundBlock extends Component {
  static propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { source, children, ...otherProps } = this.props;

    return (
      <Block {...otherProps}>
        <ImageContainerBlock>
          <Image source={source} />
          {children}
        </ImageContainerBlock>
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
