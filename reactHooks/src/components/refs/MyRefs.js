import React, { Component } from "react";

export default class MyRefs extends Component {
  constructor(props) {
    super(props);

    // craete the Ref
    this.callRefs = React.createRef();
  }

  handleRefs = () => {
    this.callRefs.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.callRefs} placeholder="Enter your name" />
        <button onClick={this.handleRefs}>Click</button>
      </div>
    );
  }
}
