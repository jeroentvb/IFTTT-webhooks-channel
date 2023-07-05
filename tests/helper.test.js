/* global describe, it, expect */
import helper from '../modules/helper'
import { API_URL, REQUEST_OPTIONS } from './constants'

describe('The helper mobule', () => {
  it('createUrl should return the API url', () => {
    const url = helper.createUrl('test', 'test_key')

    expect(url).toEqual(API_URL)
  })

  it('createRequestOptions should return the request options', () => {
    const requestOptions = helper.createRequestOptions('post')

    expect(requestOptions).toEqual(REQUEST_OPTIONS)
  })

  it('createRequestOptions should return the request options with body', () => {
    const requestoptions = helper.createRequestOptions('post', ['test', true, 1])

    REQUEST_OPTIONS.body = JSON.stringify({
      value1: 'test',
      value2: true,
      value3: 1
    })

    expect(requestoptions).toEqual(REQUEST_OPTIONS)
  })
})
