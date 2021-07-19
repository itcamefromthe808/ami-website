const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'sass')],
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
