const fetch = require('node-fetch')
const helper = require('./modules/helper')

class IFTTT {
  constructor (key) {
    if (!key || typeof key !== 'string') throw new Error('You need to set a key before making a request')
    this.key = key
  }

  async post (eventName, value) {
    if (!eventName) throw new Error('No event name given.')
    if (value && !Array.isArray(value)) throw new TypeError('The values must be in an array.')

    const res = await fetch(
      helper.createUrl(eventName, this.key),
      helper.createRequestOptions('post', value)
    )

    if (res.status !== 200) {
      throw new Error(`POST request failed with the following code: ${res.status}, ${res.statusText}`)
    }

    return res
  }
}

module.exports = IFTTT
