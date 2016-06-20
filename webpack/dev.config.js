var WebpackNotifierPlugin = require('webpack-notifier');
var config = require('./../webpack.config');
var webpack = require('webpack');

var notifier = new WebpackNotifierPlugin();
var environment = new webpack.DefinePlugin({
  __DEVELOPMENT__: true,
  __PRODUCTION__: false
});

config.plugins.push(notifier, environment);
config.devtool = 'eval-source-map';
config.devServer = {
  historyApiFallback: true,
  stats: {
    hash: false,
    chunks: false,
    children: false
  }
}

module.exports = config;
