import React from "react";
import "../UI/ApplicationDate.css";

function ApplicationDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="application-date">
      <div className="application-date__month">{month}</div>
      <div className="application-date__day">{day}</div>
      <div className="application-date__year">{year}</div>
    </div>
  );
}

export default ApplicationDate;
