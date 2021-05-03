import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //trying to change the state value directly : it doesnt render the count value on UI

    // this.setState.count = this.state.count + 1
    // console.log(this.state.count);

    // state change using the setState()

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value", this.state.count);
      }
    );
    console.log("Normal value", this.state.count);
  }

  //setState() takes 2 parameters: state object & callback Function
  // Executeion of the Code after the state has been updated

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={() => this.increment()}>Click</button>
      </div>
    );
  }
}
