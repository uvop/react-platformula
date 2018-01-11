import React from 'react';
import createStylesheet from 'src/common/stylesheet/create';
import getEnabledStylesheets from './get-enabled-stylesheets';
import mapProps from './map-props';

export default (Component) => {
  const getCustom = (baseStyle, customStyleArr = []) => {
    const customStyles = customStyleArr.map(({ style }) => style);
    const [baseStylesheet, ...customStylesheets] = createStylesheet(baseStyle, ...customStyles);
    const customStylesheetsProp = customStyleArr
      .map(({ type, options }, i) => ({ type, options, stylesheet: customStylesheets[i] }));

    return (props) => {
      const enabledStylesheets = getEnabledStylesheets(customStylesheetsProp, props);

      return (
        <Component
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
