import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';
import Block, { getCustom as getCustomBlock } from 'src/component/block';

const ScrollingBlock = getCustomBlock({
  height: '100%',
  width: '100%',
  display: 'block',
  overflowY: 'scroll',
  '-webkit-overflow-scrolling': 'touch',
});
const InnerScrollingBlock = getCustomBlock({
  height: '100%',
  width: '100%',
});

class ScrollBlock extends Component {
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
        <ScrollingBlock>
          <InnerScrollingBlock>
            {children}
          </InnerScrollingBlock>
        </ScrollingBlock>
      </Block>
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(ScrollBlock);

export default BaseComponent;
export const getCustom = _getCustom;
