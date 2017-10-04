import React from 'react'

import Shot from './shot'
import '../../assets/css/shots.css'

const Shots = ({shots}) => {
  const renderShots = () => {
    return shots.toArray().map(shot => <Shot key={shot.id} shot={shot} />)
  }

  return (
    <div className="shots">
      {shots && renderShots()}
    </div>
  )
}

export default Shots
