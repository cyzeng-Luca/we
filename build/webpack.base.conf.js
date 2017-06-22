//引用相关依赖
var path = require('path');
var webpack = require('webpack');
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
    path: BUILD_DIST,
    publicPath: 'test',
    filename: '[name].[chunkhash].js'
    // publicPath:"dist/", //给require.ensure用
    // chunkFilename: "[name].chunk.js"//给require.ensure用
  },
  module:{
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js','.vue','.json']
  }
}
