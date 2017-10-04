import React from 'react'

const ShotFooter = ({shot}) => {
  return (
    <div className="shot-footer">
      <span className="shot-views">{shot.views_count}</span>
    </div>
  )
}

export default ShotFooter
