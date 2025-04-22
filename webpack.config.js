const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
  static: './dist',
  port: 3000,
  open: true,
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // use your original HTML
      inject: 'body', // inject bundle.js at the bottom of body
    }),
  ],
  mode: 'development',
};
