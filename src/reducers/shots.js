import types from '../actionTypes'
import {OrderedMap} from 'immutable'

export default function shots(state=OrderedMap(), action) {
  switch (action.type) {
    case types.SHOTS_FETCHED:
      return action.payload.reduce(
        (nextState, shot) => nextState.set(shot.id, shot), state
      )

    default:
      return state
  }
}
