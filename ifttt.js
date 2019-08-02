const fetch = require('node-fetch')

class IFTTT {
  constructor (key) {
    if (!key || typeof key !== 'string') throw new Error('You need to set a key before making a request')
    this.key = key
  }

  async post (eventName, value) {
    if (!eventName) return new Error('No event name given.')
    if (value && !Array.isArray(value)) return new TypeError('The values must be in an array.')

    try {
      const res = await fetch(`https://maker.ifttt.com/trigger/${eventName}/with/key/${this.key}`, {
        method: 'post',
        body: value
          ? JSON.stringify({
            value1: value[0],
            value2: value[1],
            value3: value[2]
          }) : '',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status !== 200) {
        return new Error(`POST request failed with the following code: ${res.status}, ${res.statusText}`)
      }

      return res
    } catch (err) {
      return err
    }
  }
}

module.exports = IFTTT
