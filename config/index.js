//引入相关变量
var path = require('path');

//设置变量
var ROOT_PATH = path.resolve(__dirname,'../');
var SRC_PATH = path.resolve(ROOT_PATH,'src');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var BUILD_DIST = path.resolve(ROOT_PATH,'dist');


module.exports = {
  build: {
    //标识生产环境
    env: require('./prod.env'),
    //根目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    //设置生产环境静态资源文件夹
    assetsSubDirectory: 'static',
    //设置生产环境文件引用路径
    assetsPublicPath: '/',
  },
  dev: {
    //标识开发环境
    env: require('./dev.env'),
    //服务端口
    port: 9999,
    //设置开发环境静态资源文件夹
    assetsSubDirectory: 'static',
    //设置开发环境文件引用路径
    assetsPublicPath: '/',
  }
}
