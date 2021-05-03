import React, { Component } from "react";
import Navbar1 from "../../navbars/Navbar1";
import Navbar2 from "../../navbars/Navbar2";

export default class Headers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    return <div>{this.state.isLoggedin ? <Navbar2 /> : <Navbar1 />}</div>;
  }
}
