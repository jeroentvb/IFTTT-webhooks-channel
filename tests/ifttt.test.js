/* global describe, it, expect */

import { jest } from '@jest/globals'
import IFTTT from '../ifttt'
import fetch from 'node-fetch'
import { API_URL, REQUEST_OPTIONS } from './constants'

const Ifttt = new IFTTT('test_key')
jest.mock('node-fetch')

const { Response } = jest.requireActual('node-fetch')

describe('The ifttt class', () => {
  it('should post should return a response object', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response()))

    const res = await Ifttt.post('test')

    expect(res).toEqual(new Response())
    expect(fetch).toHaveBeenCalledWith(
      API_URL,
      REQUEST_OPTIONS
    )
  })

  it('should throw an error when no eventName is passed', async () => {
    await expect(Ifttt.post())
      .rejects
      .toThrowError(Error)
  })

  it('should throw an error when the value passed in is not an array', async () => {
    await expect(Ifttt.post('test', 'test'))
      .rejects
      .toThrowError(TypeError)

    await expect(Ifttt.post('test', 5))
      .rejects
      .toThrowError(TypeError)

    await expect(Ifttt.post('test', { test: true }))
      .rejects
      .toThrowError(TypeError)
  })

  it('should throw an error if the status code is not 200', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response(null, {
      status: 500
    })))

    await expect(Ifttt.post('test'))
      .rejects
      .toThrowError(Error)
  })
})
