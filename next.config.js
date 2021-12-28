const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'sass')],
  },
  images: {
    imageSizes: [90, 135, 270],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/current-work',
        permanent: true,
      },
    ]
  },
}
