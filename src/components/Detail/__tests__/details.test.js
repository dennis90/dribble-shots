import React from 'react'
import {shallow} from 'enzyme'

import ShotDetails from '../details'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('Detail ShotDetails Component', () => {
  it('should render image, views count and likes count', () => {
    const props = ShotFactory.build({})
    const wrapper = shallow(<ShotDetails shot={props} />)
    expect(wrapper).toMatchSnapshot('Shot image, views and likes')
  })
})
