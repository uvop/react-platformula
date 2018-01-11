import React from 'react';
import createStylesheet from 'src/common/stylesheet/create';
import getEnabledStylesheetsIndex from './get-enabled-stylesheets-index';
import getPropsFromStyle from './get-props-from-style';
import mapProps from './map-props';

export default (Component) => {
  const getCustom = (_baseStyle, customStyleArr = []) => {
    const { style: baseStyle, props: baseStyleProps } = getPropsFromStyle(_baseStyle);
    const customStylesWithProps = customStyleArr.map(({ style }) => getPropsFromStyle(style));

    const customStyles = customStylesWithProps.map(({ style }) => style);
    const customStylesheetProps = customStylesWithProps.map(({ props }) => props);

    const [baseStylesheet, ...customStylesheets] = createStylesheet(baseStyle, ...customStyles);

    return (props) => {
      const enabledStylesheetsIndex = getEnabledStylesheetsIndex(customStyleArr, props);

      const enabledStylesheets = enabledStylesheetsIndex.map((_, i) => customStylesheets[i]);
      const enabledStylesheetProps = enabledStylesheetsIndex.map((
        (_, i) => customStylesheetProps[i]
      ));

      const styleProps = enabledStylesheetProps.reduce((obj, style) => ({
        ...obj,
        ...style,
      }), baseStyleProps);

      return (
        <Component
          {...styleProps}
          {...mapProps({ stylesheets: [baseStylesheet].concat(enabledStylesheets) }, props)}
        />
      );
    };
  };

  return {
    Component: getCustom({}),
    getCustom,
  };
};
