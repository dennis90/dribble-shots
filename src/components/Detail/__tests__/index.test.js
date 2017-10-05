import React from 'react'
import {shallow} from 'enzyme'

import Detail from '../index'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('ShotDetail Component', () => {
  it('should render Header, Details and Footer Component', () => {
    const props = ShotFactory.build({})
    const wrapper = shallow(<Detail shot={props} />)
    expect(wrapper).toMatchSnapshot('Component mounting')
  })

  it('should return null if no `shot` is provided', () => {
    const wrapper = shallow(<Detail />)
    expect(wrapper).toMatchSnapshot('Component null mounting')
  })
})
