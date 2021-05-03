import React from "react";

export default function NamesList() {
  //step 1 : creating a array
  const items = ["books", "pencil", "pen"];

  //ex 3: mapping the array values useing List
  const itemsList = items.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    <div>
      {/* ex 1 : rendering the array values useing index(old way)*/}
      {/*} <h2>{items[0]}</h2>
      <h2>{items[1]}</h2>
  <h2>{items[2]}</h2>*/}

      {/*ex 2: rendering the array values useing map method without key */}

      {/*{items.map((item)=>{
    return <h2>{item}</h2>
})}*/}
      {itemsList}
    </div>
  );
}
