import React from "react";

// styleing useing variable name
let myStyle = {
  fontSize: "45px",
  color: "red",
};

export default function InLine() {
  return (
    <div>
      {/*Inline styling useing variable name */}
      <h1 style={myStyle}>Im a inline Styling useing variable name</h1>
      {/*normal inline styling */}

      <h2 style={{ color: "blue", fontFamily: "cursive" }}>
        im a inline styling
      </h2>
    </div>
  );
}
