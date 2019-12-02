# ifttt-webhooks-channel
[![npm version](https://badge.fury.io/js/ifttt-webhooks-channel.svg)](https://badge.fury.io/js/ifttt-webhooks-channel)
[![Maintainability](https://api.codeclimate.com/v1/badges/fa4a732362265adfd7c5/maintainability)](https://codeclimate.com/github/jeroentvb/IFTTT-webhooks-channel/maintainability)  
Tiny package to trigger an IFTTT event using the [webhooks channel](https://ifttt.com/maker_webhooks)

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Methods](#methods)
  * [Post()](#post)
* [Example](#example)

## Installation
```sh
npm install ifttt-webhooks-channel
```

## Usage
```js
// Require the module in your project
const IFTTT = require('ifttt-webhooks-channel')

// Create a new IFTTT instance
const ifttt = new IFTTT(key) // key is where your webhooks channel key goes
```

## Methods
A list of methods that `IFTTT` contains

### Post
Sends a post request to the webhooks channel to trigger an ifttt event.
```js
ifttt.post(eventName, value)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

`eventName` is the name of the event you should have created on the webhooks channel.  
`value` should be an array containing at most 3 values. These can be used in the action you attatch to the event when it's triggered, e.g. a notification.

The function returns the response object if the post was succesful. If there was some kind of error it returns an error object.

## Example
```js
const IFTTT = require('ifttt-webhooks-channel')
const ifttt = new IFTTT('your_webhooks_channel_key')

ifttt.post('event_name', [
  'value 1',
  'item 2',
  'string 3'
])
  .then(res => console.log(res))
  .catch(err => console.error(err))
```
