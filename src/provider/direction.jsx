import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createReactProvider from 'create-react-provider';
import { getCustom as getCustomBlock } from 'src/component/block';
import directions, { propType as directionPropType } from 'src/constant/direction';

const LtrBlock = getCustomBlock({
  flex: 1,
  direction: 'ltr',
});

const RtlBlock = getCustomBlock({
  flex: 1,
  direction: 'rtl',
});

const {
  Provider: InternalProvider,
  Hoc: InternalHoc,
  RenderChildren: InternalRenderChildren,
} = createReactProvider({
  value: directionPropType,
});

class DirectionProvider extends Component {
  static propTypes = {
    value: directionPropType,
    children: PropTypes.node,
  };

  static defaultProps = {
    value: directions.ltr,
    children: undefined,
  }

  renderContainer(children) {
    const { value } = this.props;
    if (value === directions.ltr) {
      return (
        <LtrBlock>
          {children}
        </LtrBlock>
      );
    }
    return (
      <RtlBlock>
        {children}
      </RtlBlock>
    );
  }

  render() {
    const { value, children } = this.props;

    return this.renderContainer((
      <InternalProvider value={value}>
        {children}
      </InternalProvider>
    ));
  }
}

export const Provider = DirectionProvider;
export const Hoc = InternalHoc;
export const RenderChildren = InternalRenderChildren;
