const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.production.config.js');

dotenv.config({ path: path.resolve(__dirname, '../.env.production') });

const PORT = process.env.PORT || 3000;

const serverOptions = {
  ...webpackConfig.devServer,
  port: PORT,
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(serverOptions, compiler);

server.startCallback(() => {
  console.log(`Starting server on http://localhost:${PORT}`);
});