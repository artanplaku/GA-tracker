import React, { useState } from 'react'
import '../UI/ApplicationForm.css'

function ApplicationForm(props) {

  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCompanyName, setEnteredCompanyName] = useState("");
  const [entredPosition, setEnteredPosition] = useState("");
  const [entredNotes, setEnteredNotes] = useState("");
  const [entredStatus, setEnteredStatus] = useState("");


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
    event.preventDefault();

    const applicationData = {
      date: new Date(enteredDate),
      companyName: enteredCompanyName,
      position: setEnteredPosition,
      notes: setEnteredNotes,
      status: setEnteredStatus




    };
    props.onSaveApplicationData(applicationData);
    setEnteredDate('');
    setEnteredCompanyName('');
    setEnteredPosition('');
    setEnteredNotes('');
    setEnteredStatus('');

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-application__controls">
        <div className="new-application__controls">
          <div className="new-application__controls">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <label>Company Name</label>
          <input type="text"
            value={enteredCompanyName}
            onChange={companyNameChangeHandler} />
        </div>

        <div className="new-application__controls">
          <label>Position</label>
          <input type="text"
            value={entredPosition}
            onChange={positionChangeHandler}
          />
        </div>
        <div className="new-application__controls">
          <label>Notes</label>
          <input type="text"
            value={entredNotes}
            onChange={notesChangeHandler}
          />
        </div>
        <div className="new-application__controls">
          <label>Status</label>
          <input type="text"
            value={entredStatus}
            onChange={statusChangeHandler}
          />
        </div>

      </div>
      <div className="new-application_actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="Submit">Add Application</button>
      </div>
    </form>
  );
};


export default ApplicationForm;
