import React from "react";
import "./StyleSheet.css";

function StyleSheet(props) {
  //Styleing useing props
  let myStyle = props.primarys ? "primary" : "secondary";

  // useing 2 classes
  return <h1 className={`${myStyle} demo`}>this is styling</h1>;
}
export default StyleSheet;
