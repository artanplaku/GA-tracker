import React from "react";
import ApplicationDate from "./ApplicationDate";
import "./styles/ApplicationItem.css";

function ApplicationItem(props) {
  return (
    <div>
      <ApplicationDate date={props.date} />
      <div>
        <div>{props.companyName}</div>
        <div>{props.status}</div>
        <div>{props.notes}</div>
      </div>
    </div>
  );
}

export default ApplicationItem;
