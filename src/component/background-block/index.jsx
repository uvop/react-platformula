import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCustom as getCustomBlock } from 'src/component/block';
import { getCustom as getCustomImage } from 'src/component/image';

export const getCustom = (style) => {
  const ImageContainerBlock = getCustomBlock({
    ...style,
    position: 'relative',
  });

  const Image = getCustomImage({
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  });

  return class BackgroundBlock extends Component {
    static propTypes = {
      children: PropTypes.node,
    }
    static defaultProps = {
      children: undefined,
    }
    render() {
      const { children, ...otherProps } = this.props;

      return (
        <ImageContainerBlock>
          <Image {...otherProps} />
          {children}
        </ImageContainerBlock>
      );
    }
  };
};

export default getCustom({});
