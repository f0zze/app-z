var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
var autoprefixer = require('autoprefixer');
var paths = require('../paths');

module.exports = function (config, env) {
  var config = genDefaultConfig(config, env);

  config.resolve.extensions.push('.ts', '.tsx', '.scss');

  config.module.preLoaders = config.module.preLoaders || [];
  config.module.preLoaders.push({
    test: /\.(ts|tsx)$/,
    loader: 'tslint-loader',
    include: paths.appSrc,
  });

  config.module.loaders.push(
    {
      test: /\.scss/,
      loader: 'style!css?importLoaders=1!postcss!sass'
    },
    {
      test: /\.(ts|tsx)?$/,
      loader: 'awesome-typescript-loader'
    }
  );

  config.postcss = function () {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
    ];
  };

  return config;
};
