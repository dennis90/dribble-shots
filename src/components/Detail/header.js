import React from 'react'

const Header = ({shot}) => {
  return (
    <div className="shot-header">
      <div className="user-profile-image">
        <img src={shot.user.avatar_url} />
      </div>
      <div>
        <div className="shot-title">
          {shot.title}
        </div>
        <div className="user-profile-info">
          by <a href={shot.user.html_url} target="_blank">{shot.user.name}</a>
        </div>
      </div>
    </div>
  )
}

export default Header
