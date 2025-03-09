const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.config.js');

const serverOptions = {
  ...webpackConfig.devServer,
  hot: true,
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(serverOptions, compiler);

server.startCallback(() => {
  console.log('Starting server on http://localhost:3000');
});