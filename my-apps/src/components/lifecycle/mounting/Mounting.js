import React, { Component } from "react";

export default class Mounting extends Component {
  //step 1= write constructor with props as parameter
  constructor(props) {
    super(props);

    this.state = {
      subject: "React JS",
    };
  }

  // step 2=static getDerivedStateFromProps(props, state)

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       subject: props.favSubject,
  //     };
  //   }

  //step 4 =componentDidMount()

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        subject: "JavaScript",
      });
    }, 3000);
  }
  //step 3= render()
  render() {
    return (
      <div>
        <h1>Name of a Subject:{this.state.subject}</h1>
      </div>
    );
  }
}
