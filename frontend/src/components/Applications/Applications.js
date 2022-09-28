import React from 'react'
import ApplicationItem from './ApplicationItem'

function Applications(props) {
  return (
    <div>
      <ApplicationItem
        date={props.items[0].date}
        companyName={props.items[0].companyName}
        position={props.items[0].position}
        status={props.items[0].status}
        notes={props.items[0].notes}
      />
      <ApplicationItem
        date={props.items[1].date}
        companyName={props.items[1].companyName}
        position={props.items[1].position}
        status={props.items[1].status}
        notes={props.items[1].notes}
      />
    </div>
  )
}

export default Applications
