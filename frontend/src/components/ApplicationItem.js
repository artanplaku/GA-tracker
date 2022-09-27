import React from "react";
import ApplicationDate from "./ApplicationDate";
import "./styles/ApplicationItem.css";

function ApplicationItem(props) {
  return (
    <div className="application-item">
      <ApplicationDate date={props.date} />
      <div className="application-item__description">
        <h2>{`Company Name: ${props.companyName}`}</h2>
        <h3>{`notes: ${props.notes}`}</h3>
        <div className="application-item__notes">
          <h2>{props.status}</h2>

        </div>
      </div>
    </div>
  );
}

export default ApplicationItem;
