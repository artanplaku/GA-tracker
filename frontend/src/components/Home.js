import React from "react";
import Applications from "./Applications"

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

      <Applications items={applications} />

    </div>
  )
}

export default Home;
