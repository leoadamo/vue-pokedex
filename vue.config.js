const globImporter = require('node-sass-glob-importer');

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          importer: globImporter()
        }
      }
    }
  }
};
