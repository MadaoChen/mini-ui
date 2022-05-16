module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[local]-[hash:base64:8]',
        },
      },
      scss: {
        additionalData: '@import "~@/variables.scss";',
      },
    },
  },
}
