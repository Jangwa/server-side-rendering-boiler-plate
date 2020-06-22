const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
      {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
        ]
  }
};
