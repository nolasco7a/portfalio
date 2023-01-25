import React from 'react'
import Navbar from './Navbar'
export const PageNotFound = () => {
  return (
    <div className="pagenotfound_container">
      <Navbar/>
      <div className="glitch">
        <p>404</p>
      </div>
      <p>Page Not Found</p> 
    </div>
  )
}

export default PageNotFound