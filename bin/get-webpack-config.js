const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const buildType = require('./build-type');

const nodeExternals = require('webpack-node-externals');

const isFile = source => (!fs.lstatSync(source).isDirectory());

/**
 * Getter for webpack config for all the different kind of builds there is in this repo
 * @param  {Object} options        Passed from building, starting and testing the application
 * @return {Object}                Webpack config object
 */
module.exports = ({
  bail = true,
  type = buildType.web,
} = {}) => {
  const rootPath = path.resolve(__dirname, '..');
  const extensions = ['.js', '.jsx'];
  const propTypesPlugin = [
    [
      'transform-react-remove-prop-types',
      {
        /*
    If npm build, wrap the the propTypes, if not, just remove them
    Component.propTypes = process.env.NODE_ENV !== "production" ? {
      // ...
    } : {};
      */
        mode: 'wrap',
        ignoreFilenames: ['node_modules'],
      },
    ],
  ];

  const modulesFolder = path.resolve(rootPath, 'src', 'module');
  const entries = fs.readdirSync(modulesFolder)
    .map(name => path.resolve(modulesFolder, name))
    .filter(isFile);

  const webpackEntries = entries.reduce((obj, entryPath) => Object.assign({}, obj, {
    [path.basename(entryPath, path.extname(entryPath))]: entryPath,
  }), {});

  const moduleNameByRelativePath = entries.reduce((obj, entryPath) => Object.assign({}, obj, {
    [path.relative(rootPath, entryPath).split(path.sep).join('/').replace(path.extname(entryPath), '')]: path.basename(entryPath, path.extname(entryPath)),
  }), {});

  let deviceExtensions;
  let outputExtension;
  switch (type) {
    default:
    case buildType.web:
      deviceExtensions = extensions.map(extension => `.web${extension}`);
      outputExtension = '';
      break;
    case buildType.ios:
      deviceExtensions = extensions.map(extension => `.ios${extension}`);
      outputExtension = '.ios';
      break;
    case buildType.android:
      deviceExtensions = extensions.map(extension => `.android${extension}`);
      outputExtension = '.android';
      break;
  }


  return ({
    bail,
    devtool: 'source-map',
    entry: webpackEntries,
    output: {
      path: path.resolve(rootPath, 'lib'),
      filename: `[name]${outputExtension}.js`,
      libraryTarget: 'umd',
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: 'process.env !== \'production\'',
        __IOS__: type === buildType.ios ? 'true' : 'false',
        __ANDROID__: type === buildType.android ? 'true' : 'false',
        __WEB__: type === buildType.web ? 'true' : 'false',
      }),
    ],
    module: {
      rules: []
        .concat([
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'stage-2'],
                  plugins: ['transform-runtime', 'transform-decorators-legacy'],
                },
              },
            ],
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'stage-2', 'react'],
                  plugins: ['transform-runtime', 'transform-decorators-legacy']
                    .concat(propTypesPlugin),
                },
              },
            ],
          },
        ]),
    },
    resolve: {
      extensions: []
        .concat(deviceExtensions)
        .concat(extensions),
      modules: [
        rootPath,
        path.join(rootPath, 'node_modules'),
      ],
    },
    externals: []
      .concat(nodeExternals({
        modulesDir: path.join(rootPath, 'node_modules'),
      }))
      .concat((context, request, callback) => {
        const exportedModule = moduleNameByRelativePath[request];
        if (exportedModule) {
          return callback(null, `commonjs react-platformula/${exportedModule}`);
        }
        callback();
        return undefined;
      }),
  });
};
