var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js//index.js',
  output: {
    filename: 'bundle.js'
  }, 
  devtool: 'source-map',
  module: {
    loaders: [     
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      'src/index.html',
      'src/images'
    ])
  ],
  devServer: {
    port: 3000
  }
}