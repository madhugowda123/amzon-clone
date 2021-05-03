import React, { Component } from "react";

class Messages extends Component {
  constructor() {
    super();
    //initialize the state object
    this.state = {
      message: "WelcomeUSER!!",
    };
  }
  changeMessage = () => {
    {
      this.setState({ message: "thanks for Visiting!!!" });
    }
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}
export default Messages;
