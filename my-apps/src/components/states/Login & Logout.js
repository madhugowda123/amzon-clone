import React, { Component } from "react";

export default class LoginandLogout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: "Welcome to ELF",
      thanks: "Thanks for Visiting",
      in: "login",
      out: "logout",
    };
  }
  changeBothValues = () => {
    this.setState({
      greeting: this.state.thanks,
      thanks: this.state.greeting,
      in: this.state.out,
      out: this.state.in,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>

        <button onClick={() => this.changeBothValues()}>{this.state.in}</button>
      </div>
    );
  }
}
