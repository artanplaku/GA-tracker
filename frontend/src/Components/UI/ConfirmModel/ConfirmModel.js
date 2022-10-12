import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Card from '../Card/Card'
import './ConfirmModel.css'
const ConfirmModel = (props) => {
  return (
    <Backdrop>
      <Card className='confirmModel'>
        <div>
          <p className='confirmText'>{props.confirmText}</p>
        </div>
        <div className='confirmButton'>
          <button className='okButton' onClick={props.onOk}>ok</button>
          <button className='cancelButton' onClick={props.onCancel} >cancel</button>
        </div>
      </Card>
    </Backdrop>
  )
}

export default ConfirmModel