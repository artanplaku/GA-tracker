import React from 'react'
import Logs from './Logs/Logs'
import LogsForm from './LogsForm/LogsForm'
// import './App.css'
import { useState } from 'react'
const Home = () => {
  const logsDataOriginal = [
    {

      id: 1,
      date: new Date(2021, 9, 28, 17, 32),
      company: "Google",
      position: "software engineer",
      status: "pending"
    },
    {
      id: 2,
      date: new Date(2022, 2, 14, 17, 32),
      company: "Apple",
      position: "learn javascript",
      status: "pending"
    },
    {
      id: 3,
      date: new Date(2021, 9, 15, 17, 32),
      company: "Amazon",
      position: "learn html",
      status: "pending"
    },
    {
      id: 4,
      date: new Date(2020, 9, 28, 17, 32),
      company: "Ciry goverment",
      position: "software engineer",
      status: "pending"
    },
  ]
  const [logsData, setLogsDate] = useState(logsDataOriginal)
  const waitChange = (id) => {
    setLogsDate(prestate => {
      let newLogsData = [...prestate]
      for (let item of newLogsData) {
        if (item.id === id) {
          item.status = "wait"
        }
      }
      return newLogsData
    })
  }
  const offerChange = (id) => {
    setLogsDate(prestate => {
      let newLogsData = [...prestate]
      for (let item of newLogsData) {
        if (item.id === id) {
          item.status = "offer"
        }
      }
      return newLogsData
    })
  }
  const rejectChange = (id) => {
    setLogsDate(prestate => {
      let newLogsData = [...prestate]
      for (let item of newLogsData) {
        if (item.id === id) {
          item.status = "reject"
        }
      }
      return newLogsData
    })
  }


  const saveNewLog = (newLog) => {
    // console.log("App.js---", newLog)
    newLog.id = Date.now() + ""
    // console.log("App.js--", newLog)
    // logsData.push(newLog)
    // console.log(logsData)
    // console.log(logsData)
    setLogsDate([newLog, ...logsData])
  }

  //define a function, delete the data from logsData
  /*const deleteLogByIndex = (index) => {
    // console.log(index)
    setLogsDate(prestate => {
      const newlogs = [...prestate]
      newlogs.splice(index, 1)
      return newlogs
    })
  }*/
  //delete by id
  const deleteLogById = (id) => {
    // console.log(index)
    setLogsDate(prestate => {
      const newlogs = prestate.filter(item => item.id !== id)
      return newlogs
    })
  }
  return (
    <div className='app'>
      <LogsForm saveNewLog={saveNewLog} />
      <Logs
        logsData={logsData}
        onDeleteLog={deleteLogById}
        onWaitChange={waitChange}
        onOfferChange={offerChange}
        onRejectChange={rejectChange}
      />
    </div>
  )
}

export default Home;