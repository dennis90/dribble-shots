import {OrderedMap} from 'immutable'


export default function shots(state=OrderedMap(), action) {
  switch (action.type) {
    case 'SHOTS_FETCHED':
      return action.payload.reduce(
        (nextState, shot) => nextState.set(shot.id, shot), state
      )

    default:
      return state
  }
}
