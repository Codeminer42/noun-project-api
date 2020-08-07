const OAuth = require('oauth')

const nounApiUrl = 'http://api.thenounproject.com'
const nounSecret = process.env.NOUN_API_SECRET

const searchIcons = (term, { apiKey } = {}) => {
  const oauth = new OAuth.OAuth(
    nounApiUrl,
    nounApiUrl,
    apiKey,
    nounSecret,
    '1.0',
    null,
    'HMAC-SHA1'
  )

  return new Promise((resolve, reject) => {
    oauth.get(`${nounApiUrl}/icons/${term}`, null, null, (error, data) => {
      if (error) {
        return reject(error)
      }

      resolve(JSON.parse(data))
    })
  })
}

module.exports = {
  searchIcons
}
