const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'browser'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'global-unit-converter.min.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.ts'],
  },
  plugins: [new CleanWebpackPlugin()],
};
