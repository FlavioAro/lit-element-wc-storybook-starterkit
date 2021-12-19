const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpackBase = require("../webpack.common.js");
const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    const baseConfig = webpackBase();

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: config.resolve.extensions,
      }),
    ];

    const config_ = {
      ...config,
      module: {
        rules: [ ...config.module.rules, ...baseConfig.module.rules ]
      },
      optimization: { ...config.optimization, ...baseConfig.optimization },
      plugins: [ ...(config.plugins || []), ...(baseConfig.plugins || []) ]
    };

    return config_;
  },

  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    //"../src/base-components/button/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  core: {
    "builder": "webpack5"
  }
}
