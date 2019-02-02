module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  // dynamic routes for export
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}
