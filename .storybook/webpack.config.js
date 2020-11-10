// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

const STANDARD_EXCLUDE = [
    path.join(__dirname, '..', 'node_modules'),
    path.join(__dirname, '..', 'dist'),
];

module.exports = async ({config, mode}) => {
    config.module.rules[0].exclude = STANDARD_EXCLUDE;
    config.module.rules[0].test = /\.(js|jsx|ts|tsx)?$/;
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.scss$/,
      use: [
          'style-loader',
          {
              loader: 'css-loader',
          },
          {
              loader: 'sass-loader',
              options: {
                  sassOptions: {
                      includePaths: ['node_modules/compass-mixins/lib', 'src/sass'],
                  },
              },
          },
      ],
    });

    config.resolve.alias.images = path.join(path.resolve(__dirname), '..', 'images')
    config.resolve.alias.sounds = path.join(path.resolve(__dirname), '..', 'sounds')
    config.resolve.alias.src = path.join(path.resolve(__dirname), '..', 'src')

    return config;
};
