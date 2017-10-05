import React from 'react'
import {shallow} from 'enzyme'

import Shot from '../shot-footer'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('Shot Component', () => {
  it('should render shot views count', () => {
    const props = ShotFactory.build({})
    const wrapper = shallow(<Shot shot={props} />)
    expect(wrapper).toMatchSnapshot('Shot div and footer')
  })
})
