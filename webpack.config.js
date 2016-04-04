var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    main: ['./app/react/index.js']
  },
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'react_bundle.js'
  },
  module: {
    loaders: [
      {
        key: 'jsx',
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [ 'babel' ]
      },
      {
        key: 'scss',
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        key: 'css',
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  resolve: {
    root: path.resolve('./app/react'),
    extensions: ['', '.js', '.jsx', '.js.jsx']
  },
  plugins: []
};
