import React, { Component } from "react";

export default class Managers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: "siri",
      yoe: 15,
      place: "America",
    };
  }
  //   changeManager() {
  //     this.setState({ manager: "Alexa" });
  //   }
  //   changeExperians() {
  //     this.setState({ yoe: 20 });
  //   }
  changeBothDetails() {
    this.setState({
      manager: "Alexa",
      yoe: 20,
    });
  }

  render() {
    return (
      <div>
        <h1>manager:{this.state.manager}</h1>
        <h1>yoe:{this.state.yoe}</h1>
        <button onClick={() => this.changeBothDetails()}>
          To change Details
        </button>

        {/*<button onClick={() => this.changeExperians()}>To change YOE</button>*/}
        <h1>place:{this.state.place}</h1>
      </div>
    );
  }
}
