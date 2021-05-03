import React from "react";
import Radium from "radium";

function RadiumStyling() {
  const styles = {
    ":hover": {
      backgroundColor: "red",
      color: "blue",
    },
  };
  return (
    <div>
      <h2>Radium Styling</h2>
      <button style={styles}>Radium button</button>
    </div>
  );
}

export default Radium(RadiumStyling);
