let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: '/dist/',
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

module.exports = (env, options) => {
  let isProd = options.mode === 'production';
  conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
  conf.target = isProd ? 'browserslist' : 'web';

  return conf;
};
