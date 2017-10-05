import React from 'react'
import {shallow} from 'enzyme'

import Header from '../header'

describe('ModalHeader Component', () => {
  it('should render div with close button', () => {
    const wrapper = shallow(<Header closeRoute={'/'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
