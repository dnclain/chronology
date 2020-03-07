const path = require('path');
const config = {
  // for ts, see https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
  // mode: production/development -- please provide when using webpack
  devtool: "source-map",
  entry: ['whatwg-fetch', '@babel/polyfill/noConflict', __dirname + '/src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/src/',
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      //components: path.resolve(__dirname, 'react/components'),
      //services: path.resolve(__dirname, 'react/services'),
      //tools: path.resolve(__dirname, 'react/tools'),
      //i18n: path.resolve(__dirname, 'react/i18n/i18n'),
    },
    extensions: ['.js', '.jsx', '.css', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader','ts-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loaders: ["source-map-loader"]
    }      
    ],
  },
};

module.exports = config;
