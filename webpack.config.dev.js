var path = require('path');
var webpack = require('webpack');
var Dotenv = require('dotenv-webpack');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(process.cwd(), 'app/entry')
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new Dotenv({
      path: './.env'
    })
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(process.cwd(), 'app')
      },
      // SCSS
      {
        test: /\.scss$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          },
        ])
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'url?limit=25000',
      //   include: path.resolve(process.cwd(), 'app/images')
      // },
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
  devtool: 'source-map',
  target: 'web',
  stats: true,
  progress: true,
  resolve: {
    root: [
      path.resolve('./app')
    ]
  }
};
