import React from 'react'
import ApplicationItem from './ApplicationItem'


function Applications(props) {
  return (
    <div>
      {props.items.map((application) => (
        <ApplicationItem
          key={application.id}
          date={application.date}
          companyName={application.companyName}
          position={application.position}
          notes={application.notes}
          status={application.status}
        />
      ))};
    </div>
  );
};

export default Applications;
