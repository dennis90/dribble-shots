import React from 'react'
import {shallow} from 'enzyme'

import Header from '../header'

describe('Document Header Component', () => {
  it('should render document header component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
