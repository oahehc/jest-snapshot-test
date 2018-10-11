/* eslint-env jest */

import renderer from 'react-test-renderer'
import React from 'react'
import App from '../index.js'

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
