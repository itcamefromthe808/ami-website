module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // TODO: add dynamic routes for export
    // do this later. leave it client side for now

    return config
  }
}
