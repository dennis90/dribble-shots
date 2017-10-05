import React from 'react'

import Header from './header'
import Details from './details'
import Footer from './footer'

import '../../assets/css/detail.css'

const Detail = ({shot}) => {
  if (shot) {
    return (
      <div className="shot-detail">
        <Header shot={shot} />
        <Details shot={shot} />
        <Footer shot={shot} />
      </div>
    )
  }
  return null
}

export default Detail
