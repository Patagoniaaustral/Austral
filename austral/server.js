const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
// const cancelFormHandler = require('./api/cancelForm')
// const contactFormHandler = require('./api/contactForm')
// const newsletterFormHandler = require('./api/newsletterForm')


const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : process.env.SITE_URL
const port = process.env.PORT || 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()



app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else if (pathname === '/c') {
        await app.render(req, res, '/c', query)
      } else {
        await handle(req, res, parsedUrl)
      }

      // if (pathname === '/api/cancelForm') {
      //   await cancelFormHandler(req, res, query)
      // } else if (pathname === '/api/contactForm') {
      //   await contactFormHandler(req, res, query)
      // } else if (pathname === '/api/newsletterForm') {
      //   await newsletterFormHandler(req, res, query)
      // } else {
      //   await handle(req, res, parsedUrl)
      // }


    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
