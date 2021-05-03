import React, { Component } from "react";
import PureComponents from "./PureComponent";
import RegularComponent from "./RegularComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "madhu",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "gowda",
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        <PureComponents names={this.state.name} />
        <RegularComponent names={this.state.name} />
      </div>
    );
  }
}
