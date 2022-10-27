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
      <button onClick={waitChange}>Pending</button>
      <button onClick={offerChange}>Offer</button>
      <button onClick={rejectChange}>Reject</button>
    </div>
  )
}

export default Change