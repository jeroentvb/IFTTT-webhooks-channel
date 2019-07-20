# ifttt-webhooks-channel
Tiny package to trigger an IFTTT event using the [webhooks channel](https://ifttt.com/maker_webhooks)

## Installation
```sh
npm install jeroentvb/ifttt-webhooks-channel
```

## Usage
```js
// Require the module in your project
const IFTTT = require('ifttt-webhooks-channel')

// Create a new IFTTT instance
const ifttt = new IFTTT(key) // key is where your webhooks channel key goes
```

### Post
This function triggers an ifttt event via the webhooks channel.
```js
ifttt.post(eventName, value)
```

`eventName` is the name of the event you should have created on the webhooks channel.  
`value` should be an array containing at most 3 values. These can be used in the action you attatch to the event when it's triggered, e.g. a notification.
