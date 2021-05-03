import React, { Component } from "react";

export default class ReactUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: "Masal Dosa",
    };
  }

  //Useing componentDidMount() to change value after 3 second

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({
  //         food: "Chicken Biriyani",
  //       });
  //     }, 3000);
  // }

  // this  function for onclick event

  changefood = () => {
    this.setState({
      food: "palav",
    });
  };

  // useing shouldComponentUpdate()

  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <h2>Food Name:{this.state.food}</h2>
        <button onClick={this.changefood}>click</button>
      </div>
    );
  }
}
