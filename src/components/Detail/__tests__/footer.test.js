import React from 'react'
import {shallow} from 'enzyme'

import Footer from '../footer'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('Detail Footer Component', () => {
  it('should render shot description', () => {
    const props = ShotFactory.build({})
    const wrapper = shallow(<Footer shot={props} />)
    expect(wrapper).toMatchSnapshot('Shot description')
  })
})
