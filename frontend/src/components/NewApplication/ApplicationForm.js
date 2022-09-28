import React from 'react';
import "../UI/ApplicationForm.css"

function ApplicationForm() {
  return (
    <form>
      <div className='new-application__controls'>
        <div className='new-application__control'>
          <label>Date</label>
          <input type="date" />
        </div>
        <div className='new-application__control'>
          <label>Company Name</label>
          <input type="text" />
        </div>
        <div className='new-application__control'>
          <label>Position</label>
          <input type="text" />
        </div>
        <div className='new-application__control'>
          <label>Notes</label>
          <input type="text" />
        </div>
        <div className='new-application__control'>
          <label>Status</label>
          <input type="text" />
        </div>
      </div>
      <div className='new-application__actions'>
        <button type="submit">Add Application</button>
      </div>
    </form>
  )
}

export default ApplicationForm;
