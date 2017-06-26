//引用相关依赖
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');





var webpackConfig = merge(baseWebpackConfig,{
   //输出文件名
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: "js/[name].[hash].js"//给require.ensure用
  }
});

module.exports = webpackConfig
