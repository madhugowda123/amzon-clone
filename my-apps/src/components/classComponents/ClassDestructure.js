import React, { Component } from "react";

export default class Trip extends Component {
  render() {
    const { Place, Budget } = this.props;
    return (
      <div>
        <h1>place:{Place}</h1>
        <h2>budget:{Budget}</h2>
      </div>
    );
  }
}
