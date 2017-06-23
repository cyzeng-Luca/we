//引用相关依赖
var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');


var HtmlWebpackPlugin = require('html-webpack-plugin');

//设置变量
var ROOT_PATH = path.resolve(__dirname,'../');
var SRC_PATH = path.resolve(ROOT_PATH,'src');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var BUILD_DIST = path.resolve(ROOT_PATH,'dist');


module.exports = {

  //打包入口 也可直接用文件夹名字，默认找index.js
  entry: {
    'app': path.join(ROOT_PATH,'/main.js'),
  },
  //输出文件名
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].[hash].js',
    publicPath: "/", //给require.ensure用
    chunkFilename: "js/[name].[chunkhash].js"//给require.ensure用
  },
  module:{
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: SRC_PATH
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [ path.join(ROOT_PATH,'/main.js'), SRC_PATH ]
      }
    ]
  },
  resolve: {
     extensions: ['.js','.vue','.json'],
     alias: {
      'Root': ROOT_PATH,
      'Src': SRC_PATH,
      'Login': path.join(SRC_PATH, '/view/login')
     }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ROOT_PATH + '/index.html',
      inject: 'body'
    })
  ]
}
