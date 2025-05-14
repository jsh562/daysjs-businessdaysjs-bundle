const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dayjs-business-bundle.js',
    library: 'DayJSBusinessBundle',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
  optimization: {
    minimize: true
  }
};