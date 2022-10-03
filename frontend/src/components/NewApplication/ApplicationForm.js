import React, { useState } from "react";
import "../UI/ApplicationForm.css";

const ApplicationForm = (props) => {
  const [entredDate, setEnteredDate] = useState("");
  const [enteredcompanyName, setEnteredCompanyName] = useState("");
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

    const expenseData = {
      date: new Date(entredDate),
      companyName: enteredcompanyName,
      positon: setEnteredPosition,
      notes: setEnteredNotes,
      status: setEnteredStatus




    };
    props.onSaveExpenseData(expenseData);
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
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              value={entredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <label>Company Name</label>
          <input type="text"
            value={enteredcompanyName}
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