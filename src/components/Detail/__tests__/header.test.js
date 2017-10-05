import React from 'react'
import {shallow} from 'enzyme'

import Header from '../footer'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('Detail Header Component', () => {
  it('should render shot title and user avatar and name', () => {
    const props = ShotFactory.build({})
    const wrapper = shallow(<Header shot={props} />)
    expect(wrapper).toMatchSnapshot('Shot title and User avatar and name')
  })
})
