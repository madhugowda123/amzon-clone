import React, { Component } from "react";
import Form from "./components/form/Form";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }
  addPerson(name, job) {
    this.setState((prevState) => ({
      people: [...prevState.people, { name, job }],
    }));
  }
  deletePerson(job) {
    return () => {
      this.setState((prevState) => ({
        people: prevState.people.filter((person) => person.job !== job),
      }));
    };
  }

  render() {
    return (
      <div className="App">
        <table
          className="table  table-bordered table-hover "
          style={{
            marginTop: 30,
            marginLeft: 24,
            marginRight: 30,
            width: 1200,
            textAlign: "center",
          }}
        >
          <thead className="table-primary">
            <tr>
              <th style={{ width: 100 }}>SL.NO</th>
              <th>NAME</th>
              <th>JOB</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.job}>
                  <th>{index + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.job}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={this.deletePerson(person.job)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Form addPerson={this.addPerson} />
      </div>
    );
  }
}
