'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function(port) {
  return {
    entry: ['webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server', './app/src/index.js'],
    output: {
      path: path.join(__dirname, 'src/build'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:' + port + '/app/src/build/',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /modules/],
          loaders: ['babel-loader'],
        }, {
          test: /\.jsx$/,
          exclude: [/node_modules/],
          loaders: ['jsx-loader', 'babel-loader', 'react-map-styles'],
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        }, {
          test: /\.md$/,
          loaders: ['html-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        // 'react-bounds': path.resolve(__dirname, './src/index.js'),
        'mat-lib': path.resolve(__dirname, './node_modules/material-ui/lib'),
      },
      extensions: ['', '.js', '.jsx'],
      fallback: [path.resolve(__dirname, './modules')],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({quiet: true}),
      new webpack.NoErrorsPlugin(),
    ],
    quiet: true,
    devtool: 'eval',
    debug: true,
  };
};
