import React from 'react'
import { IndexLink } from 'react-router'

let NotFound = () => {
  return(
    <div className="text-center">
      <h1 className="not-found">Page not found</h1>
      <IndexLink to="/" >Go to the main page</IndexLink>
    </div>
  )
}

export default NotFound
