import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const job = form.elements["job"].value;
    const name = form.elements["name"].value;
    this.props.addPerson(name, job);
    form.reset();
  }
  render() {
    return (
      <div className="card m-4" style={{ width: 500 }}>
        <br />
        <h2 style={{ textAlign: "center" }}>
          <b>Register</b>
        </h2>
        <form onSubmit={this.formSubmit}>
          <div className="form-group  m-4">
            <label>
              <b>Name</b>
            </label>
            <input
              className="form-control"
              id="name"
              typr="text"
              defaultValue=""
              placeholder="Enter Your Name"
            />
            <br />
            <label>
              <b>Job</b>
            </label>
            <input
              className="form-control"
              id="job"
              type="text"
              defaultValue=""
              placeholder="Enter Your Job"
            />
            <br />
            <button
              className="btn btn-info "
              style={{ float: "right" }}
              type="submit"
              value="submit"
            >
              Submit
            </button>
            <br />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
