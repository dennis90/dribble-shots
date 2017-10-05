import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import '../../../assets/css/modal.css'

const Modal = ({children, closeRoute}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <Header closeRoute={closeRoute} />
        {children}
      </div>
      <div className="modal-background" />
    </div>
  )
}

Modal.propTypes = {
  closeRoute: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Modal
