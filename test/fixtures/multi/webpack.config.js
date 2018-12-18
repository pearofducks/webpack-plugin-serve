const { resolve } = require('path');

const getPort = require('get-port');

const merge = require('webpack-merge');

const baseConfig = require('../commonAssets/webpack.config');

const { WebpackPluginServe: Serve } = require('../../../lib/');

const serve = new Serve({
  host: 'localhost',
  port: getPort({ port: 55555 })
});

const mainConfig = merge(baseConfig, {
  plugins: [serve],
  watch: true
});

module.exports = [
  mainConfig,
  {
    context: __dirname,
    entry: ['./worker.js', 'webpack-plugin-serve/client'],
    mode: 'development',
    output: {
      filename: './dist-worker.js',
      path: resolve(__dirname, './output'),
      publicPath: 'output/'
    },
    plugins: [serve.attach()],
    resolve: {
      alias: {
        'webpack-plugin-serve/client': resolve(__dirname, '../../../client')
      }
    }
  }
];
