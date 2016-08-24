const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const mqpacker = require('css-mqpacker');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const { NODE_ENV } = process.env;

if (!NODE_ENV) {
  throw new Error('NODE_ENV is not set. You should fix it before continue.');
}

const environment = new webpack.EnvironmentPlugin([ 'NODE_ENV' ]);
const noBuildWithErrors = new webpack.NoErrorsPlugin();
const extractStyles = new ExtractTextPlugin({
  // filename relative to config output.path
  filename: '../stylesheets/react_bundle.css',
  allChunks: true
});
const clearBuildFolders = new CleanWebpackPlugin([
  path.resolve('./app/assets/javascripts/react_bundle.js'),
  path.resolve('./app/assets/javascripts/react_bundle.js.map'),
  path.resolve('./app/assets/stylesheets/react_bundle.css'),
  path.resolve('./app/assets/stylesheets/react_bundle.css.map'),
  path.resolve('./public/assets/')
], {
  verbose: true
});
const notifier = new WebpackNotifierPlugin();
const hot = new webpack.HotModuleReplacementPlugin();

module.exports = (env) => {
  const mainEntries = [ './react/index.js' ];
  const cssLoader = {
    loader: 'css',
    query: {
      sourceMap: true,
      root: path.resolve('./app/react')
    }
  };
  const postcss = () => [
    postcssImport({ addDependencyTo: webpack }),
    mqpacker({ sort: true }),
    autoprefixer
  ];
  const plugins = [ environment, noBuildWithErrors, extractStyles ];
  const stats = {
    hash: false,
    chunks: false,
    chunkModules: false,
    children: false
  };

  if (env.development) {
    plugins.push(notifier);
  }

  if (env.hot) {
    mainEntries.unshift(
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch'
    );
    plugins.push(hot);
  }

  if (env.development && !env.hot || env.production) {
    plugins.unshift(clearBuildFolders);
  }

  return {
    context: path.resolve('./app'),
    entry: {
      main: mainEntries
    },
    output: {
      path: path.resolve('./app/assets/javascripts'),
      publicPath: env.hot ? 'http://localhost:8080/public/assets/' : '/assets/',
      filename: 'react_bundle.js'
    },
    resolve: {
      modules: [ 'node_modules', path.resolve('./app/react') ],
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
          loader: extractStyles.extract({
            fallbackLoader: 'style',
            loader: [
              cssLoader,
              'postcss',
              'sass'
            ]
          })
        },
        {
          key: 'css',
          test: /\.css$/,
          loader: extractStyles.extract({
            fallbackLoader: 'style',
            loader: [
              cssLoader,
              'postcss'
            ]
          })
        },
        {
          key: 'url',
          test: /\.(png|jpg|svg|webp|woff|woff2|mp4|mpg|pdf|txt)$/,
          loaders: [
            {
              loader: 'url',
              query: {
                name: '[name].[hash:6].[ext]',
                // outputPath relative to config output.path
                outputPath: '../../../public/assets/',
                limit: 20000
              }
            }
          ]
        }
      ]
    },
    watch: env.development,
    watchOptions: {
      aggregateTimeout: 100
    },
    devtool: env.development ? 'eval-source-map' : 'source-map',
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      hot: env.hot,
      stats
    },
    stats,
    postcss,
    plugins
  };
};
