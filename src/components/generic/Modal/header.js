import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({closeRoute}) => {
  return (
    <div className="modal-header">
      <Link to={closeRoute}>
        <span className="close-modal-button"></span>
      </Link>
    </div>
  )
}

export default Header
