import shots from '../shots'
import types from '../../actionTypes/'
import {ShotFactory} from '../factories/shot'

describe('Shots Reducer', () => {
  it('should handle initial state', () => {
    const foundState = shots(undefined, {type: undefined})
    expect(foundState).toMatchSnapshot()
  })

  it('should store received shots at `SHOTS_FETCHED` action type', () => {
    const action = {type: types.SHOTS_FETCHED, payload: ShotFactory.buildList(3)}
    const foundState = shots(undefined, action)
    expect(foundState).toMatchSnapshot()
  })
})
