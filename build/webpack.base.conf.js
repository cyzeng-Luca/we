//引入相关依赖
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
//路径为文件夹，自动引入index文件
var config = require('../config');
var utils = require('./utils')

//设置变量
var ROOT_PATH = path.resolve(__dirname,'../');
var SRC_PATH = path.resolve(ROOT_PATH,'src');


module.exports = {

  //打包入口 也可直接用文件夹名字，默认找index.js
  entry: {
    app:  path.join(ROOT_PATH,'/main.js')
    // vendor: path.join(SRC_PATH,'/assets/vendor.js')
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
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
      inject: 'body',
      minify: {
        removeComments: true,//移除注释
        // collapseWhitespace: true,//折叠空白
        removeAttributeQuotes: true//移除双引号
      },
      chunksSortMode: 'dependency'//排序方式
    }),
    new ExtractTextPlugin({
      filename:'static/css/app.css', //命名打包Css文件
      allChunks:true //所有模块css打包
    }),
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
    ])
  ]
}
