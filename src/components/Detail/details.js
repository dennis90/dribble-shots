import React from 'react'

const Detail = ({shot}) => {
  return (
    <div className="shot-data">
      <div className="image">
        <img src={shot.images.hidpi} alt={shot.title} />
      </div>
      <div className="info">
        <div className="views-count">
          <span>{shot.views_count} views</span>
        </div>
        <div className="likes-count">
          <span>{shot.likes_count} likes</span>
        </div>
      </div>
    </div>
  )
}

export default Detail
