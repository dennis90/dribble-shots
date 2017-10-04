import React from 'react'
import {Link} from 'react-router-dom'

const Detail = ({shot}) => {
  if (shot) {
    return (
      <div className="shot-detail-container">
        <div className="shot-detail">

          <div className="header modal">
            <Link to="/"><span className="close-button"></span></Link>
          </div>

          <div className="shot-header">
            <span>{shot.title}</span>
            <span>{shot.user.name} - ({shot.user.username})</span>
          </div>

          <div className="shot-image">
            <img src={shot.images.hidpi} alt={shot.title} />
            <div className="shot-numbers">
              <span className="views"></span>
              <span className="likes"></span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: shot.description}}></div>
        </div>
      </div>
    )
  }
  return null
}

export default Detail
