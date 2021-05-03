import React, { Component } from "react";
import Axios from "axios";

export default class PersonInputDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((response) => {
        console.log(response);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="id" onChange={this.handleChange} />
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
