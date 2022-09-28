import React from 'react'
import ApplicationItem from './ApplicationItem'


function Applications(props) {
  return (
    <div>
      {props.items.map((application) => (
        <ApplicationItem
          date={application.date}
          companyName={application.companyName}
          position={application.position}
          notes={application.notes}
          status={application.status}
        />
      ))}
      ;
    </div>
  );
};

export default Applications;
