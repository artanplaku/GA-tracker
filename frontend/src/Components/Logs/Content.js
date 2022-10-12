import React from 'react'
import "./Content.css"
const Content = (props) => {
  return (
    <div className="content">
      <h2 className="company">{props.company}</h2>
      <div className="position">{props.position}</div>
      <div className="status">{props.status}</div>
    </div>
  )
}

export default Content