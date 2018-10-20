const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // collection detail route
    server.get('/collections/:id', (req, res) => {
      // TODO: reject non-parametized routes (redirect to index)
      return app.render(req, res, '/collections', { id: req.params.id })
    })

    // TODO: 404 page?

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})
