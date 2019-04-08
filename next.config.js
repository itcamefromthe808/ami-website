let data = require('./data/collections.json')

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  // dynamic routes for export
  exportPathMap: function (defaultMapPath) {
    let map = {
      '/': { page: '/' }
    }

    data.forEach( collection => {
      map[collection.href.toString()]= { page: '/collection', query: { id: collection.href.toString() } }
    })

    console.log('debug', map, data)

    return map
  }
}
