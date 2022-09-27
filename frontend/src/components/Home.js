import React from "react";
import ApplicationItem from "./ApplicationItem"

function Home() {
  const applications = [
    {
      date: new Date(2002, 9, 27),
      companyName: "Company Name 1",
      status: "Applied",
      position: "Front-End-Developer",
      notes: "Remote"
    },
    {
      date: new Date(2002, 7, 27),
      companyName: "Company Name 2",
      status: "Applied",
      position: "Back-End-Developer",
      notes: "On-site"
    }
  ]
  return (
    <div>

      <ApplicationItem
        date={applications[0].date}
        companyName={applications[0].companyName}
        position={applications[0].position}
        status={applications[0].status}
        notes={applications[0].notes}
      />
      <ApplicationItem
        date={applications[1].date}
        companyName={applications[1].companyName}
        position={applications[1].position}
        status={applications[1].status}
        notes={applications[1].notes}
      />

    </div>
  )
}

export default Home;
