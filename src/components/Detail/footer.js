import React from 'react'


const Footer = ({shot}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: shot.description}}></div>
  )
}

export default Footer
