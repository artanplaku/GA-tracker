import React, { useState } from "react";
import "../UI/ApplicationForm.css";

function ApplicationForm() {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCompanyName, setEnteredCompanyName] = useState("");
  const [enteredposition, setEnteredpositon] = useState("");
  const [enterednotes, setEnterednotes] = useState("");
  const [enteredStatus, setEnteredstatus] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const companyNameChangeHandler = (event) => {
    setEnteredCompanyName(event.target.value);
  };

  const positionChangeHandler = (event) => {
    setEnteredpositon(event.target.value);
  };

  const notesChangeHandler = (event) => {
    setEnterednotes(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setEnteredstatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDeafault();

    const applicationData = {
      date: new Date(enteredDate),
      companyName: enteredCompanyName,
      position: enteredposition,
      notes: enterednotes,
      status: enteredStatus


    }

  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-application__controls">
        <div className="new-application__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Company Name</label>
          <input type="text" onChange={companyNameChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Position</label>
          <input type="text" onChange={positionChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Notes</label>
          <input type="text" onChange={notesChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Status</label>
          <input type="text" onChange={statusChangeHandler} />
        </div>
      </div>
      <div className="new-application__actions">
        <button type="submit">Add Application</button>
      </div>
    </form>
  );
}

export default ApplicationForm;
