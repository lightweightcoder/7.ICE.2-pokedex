const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/, // regex to see which files to run babel on
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // name this file main, so that it does not get automatically requested as a static file
      filename: './main.html',
      template: path.resolve(__dirname, '..', 'src', 'main.html'),
    }),

  ].filter(Boolean),
});
