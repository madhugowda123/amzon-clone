//1 st we create a result component---to display the result

import React, { Component } from "react";

export default class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="btn bg-info" style={{ textAlign: "center", width: 190 }}>
        {/* <p>- displays content from props */}

        <h4>{result}</h4>
      </div>
    );
  }
}
