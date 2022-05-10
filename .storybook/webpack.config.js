const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@': resolve('../src')
  })

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

  return config;
};