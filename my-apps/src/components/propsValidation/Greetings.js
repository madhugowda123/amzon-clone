import React, { Component } from "react";
import propTypes from "prop-Types";

export default class Greetings extends Component {
  render() {
    return (
      <div>
        <h2>Name:{this.props.name}</h2>
        <h3>Mobile NO:{this.props.mobile}</h3>
      </div>
    );
  }
}

Greetings.propTypes = {
  name: propTypes.string.isRequired,
  mobile: propTypes.number.isRequired,
};

Greetings.defaultProps = {
  name: "Hello Stranger",
  mobile: "Please Enter Your Number",
};
