var config = require('./../webpack.config');
var webpack = require('webpack');

var environment = new webpack.DefinePlugin({
  __DEVELOPMENT__: false,
  __PRODUCTION__: true
});

config.plugins.push(environment);

module.exports = config;
