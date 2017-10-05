import fetchMock from 'fetch-mock'

import types from '../../actionTypes'
import {fetchDribbleShots} from '../index'
import {ShotFactory} from '../../reducers/factories/shot'

describe('Action Creators', () => {
  it('`fetchDribbleShots` action creator', async () => {
    const dispatch = jest.fn()
    const foundShots = ShotFactory.buildList(3)
    fetchMock.get('*', foundShots)
    await fetchDribbleShots()(dispatch)
    const [path, request] = fetchMock.lastCall()

    expect(path).toMatchSnapshot('Request URL')
    expect(request).toMatchSnapshot('Request Header')
    expect(dispatch.mock.calls).toMatchSnapshot('Action dispatches')
    fetchMock.restore()
  })
})
