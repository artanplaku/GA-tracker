import React, { useState } from 'react'
import LogItem from './LogItem'
import "./Logs.css"
import Card from '../UI/Card/Card'
import LogFilter from './LogFilter/LogFilter'

const Logs = (props) => {
  // const logsData = [
  //   {
  //     id: 1,
  //     date: new Date(2022, 9, 28, 17, 32),
  //     desc: "learn react",
  //     time: "30 minutes"
  //   },
  //   {
  //     id: 2,
  //     date: new Date(2022, 2, 14, 17, 32),
  //     desc: "learn javascript",
  //     time: "30 minutes"
  //   },
  //   {
  //     id: 3,
  //     date: new Date(2021, 9, 28, 17, 32),
  //     desc: "learn react",
  //     time: "90 minutes"
  //   },
  // ]

  //filter data, only show one year data
  const [year, setYear] = useState(2022)
  const [newStatus, setNewStatus] = useState("pending")
  const changeYearHandler = (year) => {
    setYear(year)
  }
  const changeStatusHandler = (status) => {
    setNewStatus(status)
  }
  let filterData = props.logsData.filter(item => item.date.getFullYear() === year && item.status === newStatus)
  // console.log(filterData)
  let logsItemData = filterData.map((item, index) => <LogItem
    key={item.id}
    date={item.date}
    company={item.company}
    position={item.position}
    status={item.status}
    onDeleteLog={() => props.onDeleteLog(item.id)}
    onWaitChange={props.onWaitChange}
    onOfferChange={props.onOfferChange}
    onRejectChange={props.onRejectChange}
    id={item.id}
  />)
  if (logsItemData.length === 0) {
    logsItemData = <p className='no-logs'>No logs found here</p>
  }

  return (
    <Card className="logs">
      {/* {logsItemData.length !== 0 ? logsItemData : <p className='no-logs'>No logs found here</p>} */}
      <LogFilter
        year={year}
        newStatus={newStatus}
        onYearchange={changeYearHandler}
        onStatuschange={changeStatusHandler}
      />
      {logsItemData}

    </Card>
  )
}



export default Logs