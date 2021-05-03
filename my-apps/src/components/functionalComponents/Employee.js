import React from "react";

//Functional Components with Destructuring

function Employee({ ename, empID, designation }) {
  return (
    <div>
      <h2>Employee Name:{ename}</h2>
      <h3>Employee ID:{empID}</h3>
      <h3>Employee Designation:{designation}</h3>
    </div>
  );
}

export default Employee;
