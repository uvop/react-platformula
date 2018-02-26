import React from 'react';
import createStylesheet from 'src/common/stylesheet/create';
import defaultStylesheets from 'src/common/stylesheet/default-stylesheets';
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

      const enabledStylesheets = enabledStylesheetsIndex.map((
        enabledIndex => customStylesheets[enabledIndex]
      ));

      const enabledStylesheetProps = enabledStylesheetsIndex.map((
        enabledIndex => customStylesheetProps[enabledIndex]
      ));

      const styleProps = enabledStylesheetProps.reduce((obj, style) => ({
        ...obj,
        ...style,
      }), baseStyleProps);

      return (
        <Component
          {...styleProps}
          {...mapProps({
            stylesheets: defaultStylesheets
              .concat(baseStylesheet)
              .concat(enabledStylesheets),
          }, props)}
        />
      );
    };
  };

  return {
    Component: getCustom({}),
    getCustom,
  };
};
