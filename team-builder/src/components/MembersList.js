import React from "react";

function MembersList(props) {
  return (
    <div>
      <ul>
        {props.team.map(member => {
          return (
            <li>
              <span> Member Id:</span>
              {member.id}
              <span> Starting Cohort:</span>
              {member.startingCohort} <span> Name:</span> {member.name}
              <span>Current Cohort:</span> {member.currentCohort}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MembersList;
