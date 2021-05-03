import React, { Component } from "react";

export default class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      designation: "",
    };
    //Useing bind()
    //this binding is necessary to make 'this' work in callback
    this.changeCompanyName = this.changeCompanyName.bond(this);
  }
  changeCompanyName = (e) => {
    e.preventDefault();
    this.setState({
      companyName: e.target.value,
    });
  };
  changeDesignation = (e) => {
    e.preventDefault();
    this.setState({
      designation: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="cname">Enter Company Name:</label>
        <input type="text" id="cname" onChange={this.changeCompanyName} />
        <input
          type="text"
          id="dname"
          placeholder="Enter your Designation"
          onChange={this.changeDesignation.bind(this)}
        />

        <h3>Company Name you Entered is:{this.state.companyName}</h3>
        <h3> Enter Designation is:{this.state.designation}</h3>
      </div>
    );
  }
}
