import React from 'react'
import {Route} from 'react-router-dom'

import Shot from './shot'
import ShotDetail from '../Detail'
import '../../assets/css/shots.css'

export const Shots = ({shots}) => {
  const renderShots = () => {
    return shots.toArray().map(shot => <Shot key={shot.id} shot={shot} />)
  }

  const renderShotDetail = ({match}) => {
    const usedID = parseInt(match.params.id)
    const usedShot = shots.get(usedID)
    return <ShotDetail shot={usedShot} />
  }

  return (
    <div className="shots">
      <Route exact path="/:id(\d+)" render={renderShotDetail} />
      {shots && renderShots()}
    </div>
  )
}

export default Shots
