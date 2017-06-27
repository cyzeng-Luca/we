//引用相关依赖
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var utils = require('./utils');

var webpackConfig = merge(baseWebpackConfig,{
   //输出文件名
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')//给require.ensure用
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = webpackConfig
