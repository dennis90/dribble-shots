import React from 'react'
import {shallow} from 'enzyme'

import Modal from '../index'

describe('Modal Component', () => {
  it('should render modal structure', () => {
    const wrapper = shallow(
      <Modal closeRoute={'/'}>
        <span>Modal Children</span>
      </Modal>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
