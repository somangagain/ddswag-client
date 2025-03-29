const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.production.config.js');

const serverOptions = {
  ...webpackConfig.devServer,
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(serverOptions, compiler);

server.startCallback(() => {
  console.log('Starting server on https://localhost:3300');
});