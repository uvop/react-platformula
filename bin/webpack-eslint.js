const getWebpackConfig = require('./get-webpack-config');

module.exports = {
  globals: {
    __DEV__: false,
    __IOS__: false,
    __ANDROID__: false,
    __WEB__: false,
  },
  rules: {
    'jsx-a11y/no-static-element-interactions': [0],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: getWebpackConfig(),
      },
    },
  },
};
