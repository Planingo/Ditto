module.exports = {
  'stories': [
    '../src/Introduction.stories.mdx',
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-measure',
    '@storybook/addon-jest',
  ],
  webpackFinal: async (config, { configType }) => {
    const cssModel = config.module.rules.find(i => i.test.toString() === "/\\.css$/")
    let lessRule = {
      test: /\.less$/,
      sideEffects: true,
      use: [
        ...cssModel.use,
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ],
    }
    config.module.rules.push(lessRule)
    return config
  },
  core: {
    builder: 'webpack5'
  },
}
