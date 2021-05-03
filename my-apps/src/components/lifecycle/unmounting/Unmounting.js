import React, { Component } from "react";

export default class Unmounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  //to delete the mounted header

  deleteHeader = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }
    return (
      <div>
        {myHeader}
        <button onClick={this.deleteHeader}>Delete</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("Are you Sure to delete header..?");
  }
  render() {
    return (
      <div>
        <h1>Hii im a Unmounting Component</h1>
      </div>
    );
  }
}
