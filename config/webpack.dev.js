/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
/* eslint-enable */

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
});
