//引用相关依赖
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var baseWebpackConfig = require('./webpack.base.conf');

var config = require('../config');
var utils = require('./utils');

var webpackConfig = merge(baseWebpackConfig,{
   //输出文件名
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')//给require.ensure用
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' ,// 指定公共 bundle 的名字。
      filename: 'static/js/commons.[chunkhash].js',   // 公共chunk的文件名
      minChunks: function (module) { //遇到css文件，不提取公共模块，因为已经使用ExtractTextPlugin
        if(module.resource && (/^.*\.(css|scss|less)$/).test(module.resource)) {
          return false;
        }

        return module.context && module.context.indexOf("node_modules") !== -1;
      },
      // children: true,
      // async: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',   //提取webpack Runtime的辅助代码，防止common代码hash改变，使缓存失效
      chunks: ['vendor'], //指定入口提取模块的公共模块
      minChunks: Infinity //立马生成模块
    }),
    new CopyWebpackPlugin([//复制static文件到生产目录
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = webpackConfig
