
var webpack = require('webpack');
var webpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.dev.conf');
var opn = require('opn');

var compiler = webpack(webpackConfig);

//用来测试热加载
// console.log(11111111111111111)
// console.log(module)



// var uri = 'http://localhost:' + port;
var uri = 'http://localhost:' + 9999;

var server = new webpackDevServer(compiler,{
  hot: true,
  inline: true,
  stats: {
    colors: true,
  }
});


server.listen(9999,'localhost',function(error){
  if(error){
    throw error;
  }
  //服务启动后，打开网页
  opn(uri);
});
