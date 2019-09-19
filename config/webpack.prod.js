/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
/* eslint-enable */

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
});
