/* global describe, it, jest, expect */

const IFTTT = require('../ifttt')
const ifttt = new IFTTT('test_key')
jest.mock('node-fetch')
const fetch = require('node-fetch')
const { Response } = jest.requireActual('node-fetch')
const { API_URL, REQUEST_OPTIONS } = require('./constants')

describe('The ifttt class', () => {
  it('post should return a response object', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response()))

    const res = await ifttt.post('test')

    expect(res).toEqual(new Response())
    expect(fetch).toHaveBeenCalledWith(
      API_URL,
      REQUEST_OPTIONS
    )
  })

  it('should throw an error when no eventName is passed', async () => {
    await expect(ifttt.post())
      .rejects
      .toThrowError(Error)
  })

  it('should throw an error when the value passed in is not an array', async () => {
    await expect(ifttt.post('test', 'test'))
      .rejects
      .toThrowError(TypeError)

    await expect(ifttt.post('test', 5))
      .rejects
      .toThrowError(TypeError)

    await expect(ifttt.post('test', { test: true }))
      .rejects
      .toThrowError(TypeError)
  })

  it('should throw an error if the status code is not 200', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response(null, {
      status: 500
    })))

    await expect(ifttt.post('test'))
      .rejects
      .toThrowError(Error)
  })
})
