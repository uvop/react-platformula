import React from 'react';
import createStylesheet from 'src/common/stylesheet/create';
import _mapProps from './map-props';

export const mapProps = _mapProps;

export default (Component) => {
  const getCustom = (baseStyle) => {
    const [baseStylesheet] = createStylesheet(baseStyle);
    return props => (
      <Component baseStylesheet={baseStylesheet} {...props} />
    );
  };

  return {
    Component: getCustom({}),
    getCustom,
  };
};
