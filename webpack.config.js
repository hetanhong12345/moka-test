const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
let config = {
  entry: {
    ventor: ['react', 'react-dom'],
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        query: {
          configFile: './.eslintrc'
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: [/\.png$/, /\.jpg$/, /\.ico$/],
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          minimize: true
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!postcss-loader!less-loader"

      },
      {
        test: /\.css/,
        loader: "style-loader!css-loader"

      }
    ]
  },
  resolve: {
    alias: {
      /*  react: path.resolve('./node_modules/react'),*/
      lodash: path.resolve('./node_modules/lodash'),
      utils: path.resolve('./utils')
    },
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['./dist', './html']),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [precss, autoprefixer({browsers: ['last 2 versions', 'iOS 7']})];
        }
      }
    }),
    new CommonsChunkPlugin({
      name: ['ventor'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      title: 'moka-test',
      favicon: './src/images/favicon.ico',
      chunks: ['ventor', 'index'],
      inject: 'body',
      filename: path.resolve(__dirname, `html/index.html`),
      template: './index.ejs'
    }),


  ],
  devtool: '#source-map'

};


module.exports = config;

