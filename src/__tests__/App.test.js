import React from 'react'
import {mount, shallow} from 'enzyme'
import {Factory} from 'rosie'
import {OrderedMap} from 'immutable'

import {App} from '../App'
import {ShotFactory} from '../reducers/factories/shot'


describe('App Component', () => {
  it('should render shot components', () => {
    const shots = ShotFactory.buildList(3).reduce((list, shot) => {
      return list.set(shot.id, shot)
    }, OrderedMap())

    const props = {
      shots,
      actions: {
        fetchDribbleShots: jest.fn()
      }
    }

    const wrapper = shallow(<App {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call `fetchDribbleShots` action creator after component mounted', () => {
    const shots = ShotFactory.buildList(3).reduce((list, shot) => {
      return list.set(shot.id, shot)
    }, OrderedMap())

    const props = {
      shots,
      actions: {
        fetchDribbleShots: jest.fn()
      }
    }

    const wrapper = shallow(<App {...props} />)
    expect(props.actions.fetchDribbleShots).toBeCalled()
  })
})
