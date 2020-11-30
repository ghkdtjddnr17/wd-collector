const webpack = require('webpack');
const path = require('path');

const isDevelop = process.env.NODE_ENV === 'development';
let plugins = [];
if (!isDevelop) plugins = [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })];

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8383'
      }
    }
  },
  configureWebpack: {
    plugins,
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, 'src/assets/img')
      }
    }
  },
  filenameHashing: isDevelop,
  productionSourceMap: isDevelop
};
