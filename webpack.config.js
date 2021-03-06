var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    editor: './src/core/editor.scss',
    bundle: './src/core/main.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
    // new ExtractTextPlugin('[name].css'),
    //   new StyleLintPlugin({
    //     context: './src/',
    //     files: '**/*.scss',
    //     failOnError: false
    //   })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-url!postcss-loader?sourceMap!sass?sourceMap', 'stylelint')
      }
    ]
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
      remove: true
    }),
    require('postcss-inline-svg')({
      path: './src/images'
    }),
    require('postcss-calc')()
  ]
};

