import React, { Component } from "react";

export default class SnapUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      car: "SUZUKI",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ car: "TOYOTA" });
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return (document.getElementById("BeforeUpdate").innerHTML =
      "Before Update the Value was " + prevState.car);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.getElementById("AfterUpdate").innerHTML =
      "After Update the Value was" + this.state.car;
  }

  render() {
    return (
      <div>
        <h2>{this.state.car}</h2>
        <div id="BeforeUpdate"></div>
        <div id="AfterUpdate"></div>
      </div>
    );
  }
}
