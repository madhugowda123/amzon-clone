import React from "react";

class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>Color of the Car{this.props.color}</h2>

        {/*props as an object */}
        <h4>
          Car model:{this.props.carinfo.model} and the parent Company is:
          {this.props.carinfo.owner}
        </h4>
      </div>
    );
  }
}

class Garage extends React.Component {
  render() {
    //  props as a variable name
    let carcolor = "Red";

    //props as an object
    const carDetails = { model: 2021, owner: "Mahendra" };
    return (
      <div>
        {/*<h2>Im A Garage component</h2>*/}

        {/*Passing props from one component to another component*/}
        <Car color="Royal blue" />

        {/*props as a variable name */}
        <car color={carcolor} />
        {/*props as a object */}
        <car carinfo={carDetails} />
        <h3>this is Garage</h3>
        <Car color="red" />
      </div>
    );
  }
}

export default Garage;
