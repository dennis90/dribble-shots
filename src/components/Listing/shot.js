import React from 'react'

import ShotFooter from './shot-footer'


const Shot = ({shot}) => {
  const getStyle = () => ({
      backgroundImage: `url(${shot.images.normal})`
  })

  return (
    <div className="shot" style={getStyle()}>
      <ShotFooter shot={shot} />
    </div>
  )
}

export default Shot
