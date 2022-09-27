import React from 'react'
import ApplicationItem from './ApplicationItem';

function Home() {
  const applications = [
    {
      date: new Date(2002, 9, 27),
      companyName: "Amazon",
      status: "Applied",
      notes: "Front End"
    },
    {
      date: new Date(2002, 7, 27),
      companyName: "Google",
      status: "Applied",
      notes: "Back End"
    }
  ]
  return (
    <div>
      <h2>Let's track some applications</h2>
      <ApplicationItem
        date={applications[0].date}
        companyName={applications[0].companyName}
        status={applications[0].status}
        notes={applications[0].notes}
      />
      <ApplicationItem
        date={applications[1].date}
        companyName={applications[1].companyName}
        status={applications[1].status}
        notes={applications[1].notes}
      />

    </div>
  )
}

export default Home
