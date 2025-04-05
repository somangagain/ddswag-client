const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.production.config.js');

dotenv.config({ path: path.resolve(__dirname, '../.env.production') });

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) {
    console.error('Webpack build failed with fatal error:', err);
    process.exit(1);
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error('Webpack build errors:', info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn('Webpack build warnings:', info.warnings);
  }

  console.log('Webpack build completed successfully.');
});