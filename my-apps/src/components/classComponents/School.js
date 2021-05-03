import React from "react";

class School extends React.Component {
  render() {
    return (
      <div>
        <h1>School Calender</h1>
        <h2>
          Monday:{this.props.sdays} on:{this.props.sdate}
        </h2>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}
export default School;
