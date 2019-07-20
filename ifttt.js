const fetch = require('node-fetch')

class IFTTT {
  constructor (key) {
    if (!key || typeof key !== 'string') throw new Error('You need to set a key before making a request')
    this.key = key
  }

  post (eventName, value) {
    return new Promise(async (resolve, reject) => {
      if (!eventName) return reject(new Error('No event name given'))

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
          reject(new Error(`POST request failed with the following code: ${res.status}, ${res.statusText}`))
          return
        }

        resolve(res)
      } catch (err) {
        reject(err)
      }
    })
  }
}

module.exports = IFTTT
