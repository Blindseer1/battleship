const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.(png|jpg|gif)$/i, use: 'url-loader' },
      { test: /\.svg/, use: 'svg-url-loader' }
    ],
  },
};
