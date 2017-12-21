import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCustom as getCustomBlock } from 'src/component/block';

export const getCustom = (style) => {
  const ImageBlock = getCustomBlock({
    ...style,
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  });

  return class BackgroundBlock extends Component {
    static propTypes = {
      children: PropTypes.node,
      source: PropTypes.string.isRequired,
    }
    static defaultProps = {
      children: undefined,
    }
    render() {
      const { children, source } = this.props;

      return (
        <ImageBlock style={{ backgroundImage: `url(${source})` }}>
          {children}
        </ImageBlock>
      );
    }
  };
};

export default getCustom({});
