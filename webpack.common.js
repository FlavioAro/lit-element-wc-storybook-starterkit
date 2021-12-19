/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {

  const config = {

    devtool: 'inline-source-map',

    entry: './src/index.ts',

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },

        {
          test: /\.s(c|a)ss$/,
          use: [
            'lit-scss-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  outputStyle: 'compressed',
                },
              },
            },
          ],
        },

        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
          use: 'url-loader?limit=100000',
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, 'src')],
          loader: 'lit-svg-loader',
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },

  };

  return config;
};