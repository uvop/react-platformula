const webpack = require('webpack');
const getWebpackConfig = require('./get-webpack-config');
const buildType = require('./build-type');

const cb = (err, stats) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    process.exit(1);
  } else {
    // eslint-disable-next-line no-console
    console.log('[webpack log]', stats.toString());
  }
};

Object.values(buildType).forEach((type) => {
  const webpackConfig = getWebpackConfig({
    type,
  });

  webpack(webpackConfig, cb);
});

