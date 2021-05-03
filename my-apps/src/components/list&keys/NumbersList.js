import React from "react";

//Passing the array of elements as a props
//creating the array where you are passing a propsto the component
export default function NumbersList(props) {
  //numitems is the propsa that needs to be passed for the NumberList Component.
  const numList = props.numitems;
  const updatedNumItems = numList.map((newItems) => {
    return <li key={newItems}>{newItems}</li>;
  });
  return (
    <div>
      <ol>{updatedNumItems}</ol>
    </div>
  );
}
