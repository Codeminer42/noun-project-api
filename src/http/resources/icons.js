const NounProjectService = require('../../infra/nounProjectService')

const searchIcons = async (req, res) => {
  try {
    const icons = await NounProjectService.searchIcons(req.params.search, {
      apiKey: req.query.key
    })

    res.status(200).json(icons)
  } catch (error) {
    res.status(error.statusCode).json(error)
  }
}

module.exports = { searchIcons }
