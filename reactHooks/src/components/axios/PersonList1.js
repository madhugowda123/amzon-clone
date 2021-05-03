import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function PersonList1() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("MyResponse", response);

      setPersons({
        persons: response.data,
      });
    });
  }, []);

  return (
    <div>
      <h1>{persons}</h1>
      <h1> {() => setPersons({ persons })}</h1>
      {this.persons.map((person) => {
        return <li key={person.id}>{person.name}</li>;
      })}
    </div>
  );
}
