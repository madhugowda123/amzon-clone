import React from "react";

export default function Person({ personDetails }) {
  return (
    <div>
      <h2>
        Im{personDetails.name} and im from{personDetails.place}.My Employee ID
        is
        {personDetails.empID}
      </h2>
    </div>
  );
}
