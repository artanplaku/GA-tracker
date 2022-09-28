import React from "react";
import ApplicationDate from "./ApplicationDate";
import "../UI/ApplicationItem.css";

function ApplicationItem(props) {
  return (
    <div className="application-item">
      <ApplicationDate date={props.date} />
      <div className="application-item__description">
        <h2>{props.companyName}</h2>
        <h2>{props.position}</h2>
        <h2>{props.notes}</h2>
        <div className="application-item__notes">
          <h2>{props.status}</h2>
        </div>
      </div>

    </div>
  );
}

export default ApplicationItem;
