var path = require('path');
var autoprefixer = require('autoprefixer');

var config = {
  entry: {
    main: [ './app/react/index.js' ]
  },
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'react_bundle.js'
  },
  resolve: {
    root: path.resolve('./app/react'),
    extensions: [ '', '.js', '.jsx', '.json' ]
  },
  module: {
    loaders: [
      {
        key: 'jsx',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel' ]
      },
      {
        key: 'scss',
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass', 'postcss' ]
      },
      {
        key: 'css',
        test: /\.css$/,
        loaders: [ 'style', 'css', 'postcss' ]
      }
    ]
  },
  postcss: function () {
    return [ autoprefixer ];
  },
  plugins: []
};

module.exports = config;
