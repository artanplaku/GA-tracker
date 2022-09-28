import React, { useState } from "react";
import "../UI/ApplicationForm.css";

function ApplicationForm() {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCompanyName, setEnteredCompanyName] = useState("");
  const [enteredPosition, setEnteredPosition] = useState("");
  const [enteredNotes, setEnteredNotes] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const companyNameChangeHandler = (event) => {
    setEnteredCompanyName(event.target.value);
  };

  const positionChangeHandler = (event) => {
    setEnteredPosition(event.target.value);
  };

  const notesChangeHandler = (event) => {
    setEnteredNotes(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDeafault();

    const applicationData = {
      date: new Date(enteredDate),
      companyName: enteredCompanyName,
      position: enteredPosition,
      notes: enteredNotes,
      status: enteredStatus,
    };
    setEnteredDate('');
    setEnteredCompanyName('');
    setEnteredPosition('');
    setEnteredNotes('');
    setEnteredStatus('');

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-application__controls">
        <div className="new-application__control">
          <label>Date</label>
          <input type="date"
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Company Name</label>
          <input type="text"
            value={enteredCompanyName}
            onChange={companyNameChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Position</label>
          <input type="text"
            value={enteredPosition}
            onChange={positionChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Notes</label>
          <input type="text"
            value={enteredNotes}
            onChange={notesChangeHandler} />
        </div>
        <div className="new-application__control">
          <label>Status</label>
          <input type="text"
            value={enteredStatus}
            onChange={statusChangeHandler} />
        </div>
      </div>
      <div className="new-application__actions">
        <button type="submit">Add Application</button>
      </div>
    </form>
  );
}

export default ApplicationForm;
