var Webpack = require('webpack');
var Path = require('path');

module.exports = {
  context: Path.join(__dirname, '/app'),
  entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './index.jsx'
  ],
  output: {
    path:  Path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    noInfo: true,
    hot: true,
    inline: true
  },
  plugins: [
    new Webpack.NoErrorsPlugin()
  ]
};
