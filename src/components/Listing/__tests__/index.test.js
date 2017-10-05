import React from 'react'
import {shallow} from 'enzyme'
import {OrderedMap} from 'immutable'

import ShotList from '../index'
import {ShotFactory} from '../../../reducers/factories/shot'

describe('ShotList Component', () => {
  it('should render Header, Details and Footer Component', () => {
    const props = ShotFactory.buildList(3).reduce((list, shot) => {
      return list.set(shot.id, shot)
    }, OrderedMap())
    const wrapper = shallow(<ShotList shots={props} />)
    expect(wrapper).toMatchSnapshot('Render a listing with 3 shots')
  })

  it('should return null if no `shots` are provided', () => {
    const wrapper = shallow(<ShotList />)
    expect(wrapper).toMatchSnapshot('Component null mounting')
  })
})
