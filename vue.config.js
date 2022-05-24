module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[local]-[hash:base64:8]',
        },
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
}
