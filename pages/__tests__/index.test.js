/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import App from '../index.js'

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App />)

    expect(app).toMatchSnapshot()
  })
})
