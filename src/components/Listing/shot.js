import React from 'react'
import {withRouter} from 'react-router-dom'

import ShotFooter from './shot-footer'


const Shot = ({shot, history}) => {
  const getStyle = () => ({
      backgroundImage: `url(${shot.images.normal})`
  })

  const handleShotClick = () => {
    history.push(`/${shot.id}`)
  }

  return (
    <div
      className="shot"
      style={getStyle()}
      onClick={handleShotClick}>
      <ShotFooter shot={shot} />
    </div>
  )
}

export default withRouter(Shot)
