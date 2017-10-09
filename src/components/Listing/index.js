import React from 'react'
import {Route} from 'react-router-dom'

import Shot from './shot'
import ShotDetail from '../Detail'
import Modal from '../generic/Modal'
import '../../assets/css/listing.css'

export const Shots = ({shots}) => {
  const renderShots = () => {
    return shots.toArray().map(([key, shot]) => <Shot key={key} shot={shot} />)
  }

  const renderShotDetail = ({match}) => {
    const usedID = parseInt(match.params.id, 10)
    const usedShot = shots.get(usedID)
    return (
      <Modal closeRoute="/">
        <ShotDetail shot={usedShot} />
      </Modal>
    )
  }

  return (
    <div className="shots">
      <Route exact path="/:id(\d+)" render={renderShotDetail} />
      {shots && renderShots()}
    </div>
  )
}

export default Shots
