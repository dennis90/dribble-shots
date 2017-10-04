import React from 'react'

const Detail = ({shot}) => {
  if (shot) {
    return (
      <div className="shot-detail-container">
        <div className="shot-detail">
          <span>{shot.title}</span>
          <span>{shot.user.name} - ({shot.user.username})</span>
          <img src={shot.images.hidpi} />
          <span className="views"></span>
          <span className="likes"></span>
          <p dangerouslySetInnerHTML={{ __html: shot.description}}></p>
        </div>
      </div>
    )
  }
  return null
}

export default Detail
