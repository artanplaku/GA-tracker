import React from 'react';
import "../UI/NewApplication.css";
import ApplicationForm from './ApplicationForm';

function NewApplication(props) {
  const saveApplicationDataHandler = (enteredApplicationData) => {
    const applicationData = {
      ...enteredApplicationData,
      id: Math.random().toString()
    };
    props.onAddApplication(applicationData);

  }
  return (
    <div className='new-application'>
      <ApplicationForm onSaveApplicationData={saveApplicationDataHandler} />
    </div>
  )
};

export default NewApplication;
