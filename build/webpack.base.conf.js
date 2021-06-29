'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: config.build.assetsRoot,
    chunkFilename: '[name].bundle.js',
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'development'
      ? config.dev.assetsPublicPath
      : config.build.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@styles': resolve('src/assets/'),
      config: path.resolve(`config/${process.env.NODE_ENV}.env` || 'prod.env'),
    },
  },
  module: {
    rules: [
      {
        test: /icons\.js$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            },
          }, 'postcss-loader', 'webfonts-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin(),
  ],
}
