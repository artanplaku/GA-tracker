import React from 'react'
import './LogFilter.css'
const LogFilter = (props) => {

  const changYearHandler = (e) => {
    props.onYearchange(+e.target.value)
  }
  const changStatusHandler = (e) => {
    props.onStatuschange(e.target.value)
  }

  return (
    <div className='log-filter'>

      <div>
        Year:<select value={props.year} onChange={changYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div>
        Status:<select value={props.status} onChange={changStatusHandler}>
          <option value="wait">waiting</option>
          <option value="offer">offer</option>
          <option value="reject">reject</option>
        </select>
      </div>
    </div>
  )
}

export default LogFilter