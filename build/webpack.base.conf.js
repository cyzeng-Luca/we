//引入相关依赖
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//路径为文件夹，自动引入index文件
var config = require('../config');
var utils = require('./utils')

//设置变量
var ROOT_PATH = path.resolve(__dirname,'../');
var SRC_PATH = path.resolve(ROOT_PATH,'src');


module.exports = {

  //打包入口 也可直接用文件夹名字，默认找index.js
  entry: {
    app: path.join(ROOT_PATH,'/main.js'),
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath,//给require.ensure用
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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'Root': ROOT_PATH,
      'Src': SRC_PATH,
      'Login': path.join(SRC_PATH, '/view/login')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ROOT_PATH + '/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
