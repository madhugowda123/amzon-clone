import React, { Component } from "react";
import Axios from "axios";

export default class PersonInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // handling the submission of the from
  handleSubmit = (event) => {
    event.preventDefault(); // stops the brower from ewloading the page

    // creating the new object
    const user = {
      name: this.state.name,
    };

    //adding the user object as payload
    Axios.post("https://jsonplaceholder.typicode.com/users", { user }).then(
      (response) => {
        console.log(response);
        console.log(response.data);
      }
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} />
          <button type="submit">Click</button>
        </form>
      </div>
    );
  }
}
