//引入相关依赖
var path = require('path');
//路径为文件夹，自动引入index文件
var config = require('../config');

//设置变量
var ROOT_PATH = path.resolve(__dirname,'../');
var SRC_PATH = path.resolve(ROOT_PATH,'src');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var BUILD_DIST = path.resolve(ROOT_PATH,'dist');



module.exports = {
  entry: {
    app: path.join(ROOT_PATH,'/main.js'),
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].[hash].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
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
      'Root': ROOT_PATH,
      'Src': SRC_PATH,
      'Login': path.join(SRC_PATH, '/view/login')
    }
  }
}
