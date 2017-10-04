import {publicAPIKey} from '../../settings.js'


export const fetchDribbleShots = () => dispatch => {
  return fetch('https://api.dribbble.com/v1/shots/', {
    headers: new Headers({
      'Authorization': `Bearer ${publicAPIKey}`
    })
  })
  .then(response => response.json())
  .then(json => dispatch({type: 'SHOTS_FETCHED', payload: json}))
}