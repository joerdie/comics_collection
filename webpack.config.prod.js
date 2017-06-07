var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: [
    './app/entry'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle-[hash:6].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('styles-[hash:6].css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new Dotenv({
      path: './.env',
      systemvars: true
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'index.prod.html'
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    },
    // CSS
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        combineLoaders([{
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'sass-loader'
        }
      ])
      )
    },
    {
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader'
      // include: path.resolve(process.cwd(), 'app/images')
    }
    ]
  },
  sassLoader: {
    includePaths: [ 'app/Shared/styles' ]
  },
  resolve: {
    root: [
      path.resolve('./app')
    ]
  }
};
