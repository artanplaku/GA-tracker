import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './LogsForm.css'
const LogsForm = (props) => {
  //store the data into a variable;
  // let inputDate = ''
  // let inputDesc = ''
  // let inputTime = 0

  //store the data into state
  const [inputDate, setInputDate] = useState("")
  const [inputCompany, setInputCompany] = useState("")
  const [inputPosition, setInputPosition] = useState("")
  const [inputStatus, setInputStatus] = useState("")

  // const [formData, setFormData] = useState({
  //   inputDate: "",
  //   inputDesc: "",
  //   inputTime: ""
  // })
  const dateChangeHandler = (e) => {
    // let desc = e.target
    // console.log(e.target.value);
    // inputDate = e.target.value
    setInputDate(e.target.value)
    console.log("inputdate-", e.target.value)

    // setFormData({
    //   ...formData, inputDate: e.target.value
    // })
  }
  const companyChangeHandler = (e) => {
    // let desc = e.target
    // console.log(e.target.value);
    // inputDesc = e.target.value
    setInputCompany(e.target.value)
    // setFormData({
    //   ...formData, inputDesc: e.target.value
    // })
  }
  const positionChangeHandler = (e) => {
    // let desc = e.target
    // console.log(e.target.value);
    // inputDesc = e.target.value
    setInputPosition(e.target.value)
    // setFormData({
    //   ...formData, inputDesc: e.target.value
    // })
  }
  const statusChangeHandler = (e) => {
    // let desc = e.target
    // console.log(e.target.value);
    // inputTime = e.target.value
    setInputStatus(e.target.value)
    // setFormData({
    //   ...formData, inputTime: e.target.value
    // })
  }
  const formSubmitHandler = (e) => {
    //the event is the form.

    e.preventDefault()
    //collect the data from date, desc, time.
    // console.log(e.target)
    // console.log(inputDate, inputDesc, inputTime);
    //put the datas into a object

    const newLog = {
      date: new Date(inputDate),
      company: inputCompany,
      position: inputPosition,
      status: inputStatus//change string into number
    }
    // const newLog = {
    //   date: new Date(formData.inputDate),
    //   desc: formData.inputDate,
    //   time: formData.inputTime
    // }
    console.log(newLog)
    console.log("newLogDate-", newLog.date)
    console.log("newLogDate-", newLog.date.getDate())
    props.saveNewLog(newLog)
    /**
     * uncontrolled component: 
     * the data stored in normal variable. the variable change cant trigger the render of component.
     * how to clear the data in form item? the data typed by user,we can use native javascipt get 
     * the element, then it will change. 
     * 
     * controlled component:
     * the data stored in component.
     * 
     * two way buddle the data.
     * form data store in state. data change , state change.
     * set form element's value equal state. state change, data change.
     */

    setInputDate("")
    setInputCompany("")
    setInputPosition("")
    setInputStatus("")

    // setFormData({
    //   inputDate: "",
    //   inputDesc: "",
    //   inputTime: ""
    // })

  }
  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className='form-item'>
          <label htmlFor='date'>date</label>
          <input id='date' type="date" value={inputDate} onChange={dateChangeHandler} />
          {/* <input id='date' type="date" value={formData.inputDate} onChange={dateChangeHandler} /> */}
        </div>
        <div className='form-item'>
          <label htmlFor='company'>company</label>
          <input id='company' type="text" value={inputCompany} onChange={companyChangeHandler} />
          {/* <input id='desc' type="text" value={formData.inputDesc} onChange={descChangeHandler} /> */}
        </div>
        <div className='form-item'>
          <label htmlFor='position'>position</label>
          <input id='position' type="text" value={inputPosition} onChange={positionChangeHandler} />
          {/* <input id='desc' type="text" value={formData.inputDesc} onChange={descChangeHandler} /> */}
        </div>
        <div className='form-item'>
          <label htmlFor='status'>status</label>
          <input id='status' type="text" value={inputStatus} onChange={statusChangeHandler} />
          {/* <input id='time' type="number" value={formData.inputTime} onChange={timeChangeHandler} /> */}
        </div>
        <div className='form-btn'>
          <button>add</button>
        </div>

      </form>
    </Card>
  )
}

export default LogsForm