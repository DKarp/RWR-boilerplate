// var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        loader: 'style-loader!css-loader!sass-loader!postcss-loader' // - inline: working
        // loader: ExtractTextPlugin.extract('css!sass') // - generated: not working
      },
      {
        key: 'css',
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader' // - inline: working
        // loader: ExtractTextPlugin.extract('css!sass') // - generated: not working
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx']
  },
  plugins: [
    // new ExtractTextPlugin('../stylesheets/react_bundle.css', {
    //   allChunks: true
    // })
  ]
};
