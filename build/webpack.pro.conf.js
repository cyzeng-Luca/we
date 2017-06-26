//引用相关依赖
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

var webpackConfig = merge(baseWebpackConfig,{
   //输出文件名
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js'//给require.ensure用
  }
});

module.exports = webpackConfig
