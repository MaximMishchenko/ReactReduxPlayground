import React from 'react'

let Main = (props) => {
  return(
    <div>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
