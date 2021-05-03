import React from "react";
import Person from "./Person";

const persons = [
  {
    name: "Madhu",
    place: "tarikere",
    empID: 1223,
  },

  {
    name: "Prthama",
    place: "changiri",
    empID: 1224,
  },

  {
    name: "kusuma",
    place: "shimoga",
    empID: 1225,
  },
  {
    name: "pavitra",
    place: "banglore",
    empID: 1226,
  },
];

export default function PersonList() {
  const employeesList = persons.map((person) => (
    <Person key={person.empID} personDetails={person} />
  ));
  return <div>{employeesList}</div>;
}
