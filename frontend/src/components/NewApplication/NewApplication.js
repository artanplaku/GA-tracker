import React, { useState } from 'react';
import "../UI/NewApplication.css";
import ApplicationForm from './ApplicationForm';



const NewApplication = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveApplicationDataHandler = (enteredApplicationData) => {
    const applicationData = {
      ...enteredApplicationData,
      id: Math.random().toString(),
    };
    props.onAddApplication(applicationData);
    setIsEditing(false);

  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-application">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Application</button>
      )}
      {isEditing && (
        <ApplicationForm
          onSaveExpenseData={saveApplicationDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewApplication;