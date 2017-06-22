const webpack = require('webpack');
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require('./webpack.dev.conf');

const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler,{
  hot: true,
  stats: {
    colors: true,
    timings: true
  }
});


server.listen(9999);
