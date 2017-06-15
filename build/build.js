var webpack = require('webpack');
var webpackConfig = require('./webpack.pro.conf');
webpack(webpackConfig,function(error, status){
  if(error){
    throw error;
  }
  process.stdout.write(status.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
});
