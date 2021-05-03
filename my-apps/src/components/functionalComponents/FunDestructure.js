import React from "react";

function Poet(props) {
  const { PoetName, Book } = props;
  return (
    <div>
      <h1>Name:{PoetName}</h1>
      <h2>BookName:{Book}</h2>
    </div>
  );
}
export default Poet;
