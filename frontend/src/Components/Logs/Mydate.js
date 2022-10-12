import React from 'react'
import "./Mydate.css"
const Mydate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: 'short' })
  // const month = mydate.getMonth()
  const date = props.date.getDate()
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{date}</div>
    </div>
  )
}

export default Mydate