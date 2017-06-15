var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');
console.log('-------------')
console.log(webpackConfig)
console.log(webpack)
console.log('-------------')
webpack(webpackConfig,function(){

})
