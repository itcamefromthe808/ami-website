const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'sass')],
  },
  images: {
    loader: 'custom',
    imageSizes: [90, 135, 270],
  },
  async redirects() {
    return [
      {
        source: '/current-work',
        destination: '/editorials',
        permanent: true,
      },
    ]
  },
}
