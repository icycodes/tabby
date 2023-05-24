const path = require('path');
const webpack = require("webpack");

/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const nodeConfig = {
  target: 'node',
  mode: 'none',
  output: {
    filename: 'tabby-agent.js',
    path: path.resolve(__dirname, 'dist', 'node'),
  },
  entry: './src/node/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
};

const browserConfig = {
  target: 'webworker',
  mode: 'none',
  output: {
    filename: 'tabby-agent.js',
    path: path.resolve(__dirname, 'dist', 'browser'),
  },
  entry: './src/browser/index.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.ts', '.js'],
    preferRelative: true,
    fallback: {
      // Webpack 5 no longer polyfills Node.js core modules automatically.
      // see https://webpack.js.org/configuration/resolve/#resolvefallback
      // for the list of Node.js core module polyfills.
      assert: require.resolve('assert'),
      events: require.resolve('events'),
    },
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^node:/,
      (resource) => {
        resource.request = resource.request.replace(/^node:/, '');
      },
    ),
    // new webpack.ProvidePlugin({
    //   process: "process/browser", // provide a shim for the global `process` variable
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
};

module.exports = [nodeConfig, browserConfig];
