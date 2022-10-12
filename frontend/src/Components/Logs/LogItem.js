import React, { useState } from 'react'
import Content from './Content'
import Mydate from './Mydate'
import "./LogItem.css"
import Card from '../UI/Card/Card'
import ConfirmModel from '../UI/ConfirmModel/ConfirmModel'
import Change from './Change/Change'
const LogItem = (props) => {
  // console.log("props", props)
  //props.desc = "everything"
  // props only read!!!
  // console.log(props.desc)

  //if confirmModel show

  const [showConfirmModel, setConfirmModel] = useState(false)

  const deleteItemHandler = () => {
    // const isDelete = window.confirm("It will delete!Do you want to delete?")

    // if (isDelete) {
    //   // alert('delete!')
    //   //how to delete the item? delete the data in logsData, but where is logsData
    //   // console.log(props.onDeleteLog)
    //   props.onDeleteLog()
    // }
    setConfirmModel(true)
  }
  const cancelHandler = () => {
    setConfirmModel(false)
  }
  const okHandler = () => {
    props.onDeleteLog()
  }
  /**
   * portal
   * By default, component will be render as a child of father component.
   * this will bring some problems some time.
   * 
   * with portal, we can render the component to a destination position
   * 1 add a element in index.html
   * 2 change the render way of component
   *    ReactDOM.createPortal(a,b)
   * a jsx
   * b destination(a dom element)container
   * 
   */
  console.log('logitem', props.id)
  return (
    <Card className="item">
      {showConfirmModel && <ConfirmModel
        onCancel={cancelHandler}
        onOk={okHandler}
        confirmText='Delete the logs! Are you sure?' />}
      <Mydate date={props.date} />
      <Content company={props.company} position={props.position} status={props.status} />
      <Change
        onWaitChange={props.onWaitChange}
        onOfferChange={props.onOfferChange}
        onRejectChange={props.onRejectChange}
        id={props.id} />
      <div>
        <div className='delete' onClick={deleteItemHandler} >x</div>
      </div>
    </Card>
  )
}

export default LogItem