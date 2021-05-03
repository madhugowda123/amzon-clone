import React, { PureComponent } from "react";

export default class PureComponents extends PureComponent {
  render() {
    console.log("*******Regular Component***********");

    return <h2>Pure Component {this.props.names}</h2>;
  }
}
