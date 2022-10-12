import React from 'react'
import './Change.css'
const Change = (props) => {
  let id = props.id
  const waitChange = () => {
    props.onWaitChange(id)

  }
  const offerChange = () => {
    props.onOfferChange(id)

  }
  const rejectChange = () => {
    props.onRejectChange(id)

  }

  return (
    <div className='change'>
      <button onClick={waitChange}>waiting</button>
      <button onClick={offerChange}>offer</button>
      <button onClick={rejectChange}>reject</button>
    </div>
  )
}

export default Change