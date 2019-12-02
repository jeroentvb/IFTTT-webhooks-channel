function createUrl (eventName, key) {
  return `https://maker.ifttt.com/trigger/${eventName}/with/key/${key}`
}

function createRequestOptions (method, value) {
  return {
    method: method,
    body: value
      ? JSON.stringify({
        value1: value[0],
        value2: value[1],
        value3: value[2]
      }) : '',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

module.exports = {
  createUrl,
  createRequestOptions
}
