const {mergeConfig} = require('vite');

process.env.DESIGN_TOKEN_GLOB = '**/*.tokens.{css,scss,less,svg}';
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: 'storybook-design-token',
      options: {
        DESIGN_TOKEN_GLOB: '**/*.tokens.{css,scss,less,svg}',
      },
    },
  ],
  framework: '@storybook/web-components',
  babel: async (options) => {
    Object.assign(
      options.plugins.find((plugin) =>
        plugin[0].includes('plugin-proposal-decorators')
      )[1],
      {
        decoratorsBeforeExport: true,
        legacy: false,
      }
    );
    return options;
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      base: process.env.MODE === 'production' ? '/wc-progressbar/' : '/',
    });
  },
};
