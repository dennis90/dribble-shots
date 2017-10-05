import React from 'react'
import {shallow} from 'enzyme'

import ShotFooter from '../shot-footer'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('ShotFooter Component', () => {
  it('should render shot views count', () => {
    const props = ShotFactory.build({})
    const wrapper = shallow(<ShotFooter shot={props} />)
    expect(wrapper).toMatchSnapshot('Shot view count')
  })
})
