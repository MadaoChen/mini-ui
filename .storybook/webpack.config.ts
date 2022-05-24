const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = function({ config }) {
  // config.postcss = function() {
  //   return [require('postcss-px2rem')({remUnit: 75})];
  // }
  config.module.rules.push({
    test: /\.scss$/,
    // loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
    use: [
      { loader: MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: "[local]-[hash:base64:8]",
          },
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      },
      { loader: 'sass-loader' }
    ]
  });

  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@': resolve('../src')
  })

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

  return config;
};