const Express = require('express')
const Morgan = require('morgan')
const Cors = require('cors')
const Router = require('./router')

const server = Express()

server.use(Morgan('tiny'))
server.use(Cors())

Router.addRoutes(server)

const start = () => {
  const port = process.env.PORT || 3000

  const http = server.listen(port, () => {
    const { port } = http.address()

    console.log(`Listening at port ${port}`)
  })
}

module.exports = {
  start
}
