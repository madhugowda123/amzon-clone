import React from "react";

//Functional Components with useing Props

function Student(props) {
  return (
    <div>
      <h1>Student Name:{props.sname}</h1>
      <h3>CGPA:{props.cgpa}</h3>
      <p>{props.children}</p>
    </div>
  );
}
export default Student;
