const iconsResource = require('./resources/icons')

const addRoutes = (server) => {
  server.get('/icons/:search', iconsResource.searchIcons)
}

module.exports = {
  addRoutes
}
