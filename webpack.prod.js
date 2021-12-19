const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const prod = {

    mode: 'production',

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Lit element Storybook Starterkit',
        template: './src/index.html'
      })
    ],

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
          },
        }),
      ],
    }

  };

  return merge(common(env), prod);
};