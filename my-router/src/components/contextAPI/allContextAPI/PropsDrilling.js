import React, { Component } from "react";

//the name is passed from resort to lift
//& lift to tril
//usually its time consuming
//This is called as Props Drilling

//step3: Additional Child component 2
const Tril = (props) => <div>{props.name}</div>;

//step2: child component 1
const Lift = (props) => (
  <div>
    <Tril name={props.name} />
  </div>
);

export default class Resort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Snowtooth Mountain",
    };
  }

  render() {
    return (
      <div>
        <Lift name={this.state.name} />
      </div>
    );
  }
}
