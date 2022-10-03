import React, { useState } from "react";
import Applications from "./Applications/Applications";
import NewApplication from "./NewApplication/NewApplication";

const DUMMY_APPLICATIONS = [
  {
    id: 'a1',
    date: new Date(2002, 9, 27),
    companyName: "Company Name 1",
    status: "Applied",
    position: "Front-End-Developer",
    notes: "Remote",
  },
  {
    id: 'a2',
    date: new Date(2002, 7, 27),
    companyName: "Company Name 2",
    status: "Applied",
    position: "Back-End-Developer",
    notes: "On-site",
  },
];


function Home() {
  const [applications, setApplications] = useState(DUMMY_APPLICATIONS);

  const addApplicationHandler = application => {
    setApplications(prevApplications => {
      return [application, ...prevApplications]
    });
  };

  return (
    <div>
      <NewApplication onAddApplication={addApplicationHandler} />

      <Applications items={applications} />


    </div>
  );
}



export default Home;
