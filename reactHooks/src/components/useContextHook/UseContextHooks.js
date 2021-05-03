import React from "react";

const MyContext = React.createContext();

export default function UseContextHooks() {
  return (
    <div>
      <MyContext.Provider value={50}>
        <Sample />
      </MyContext.Provider>
    </div>
  );
}
function Sample() {
  return (
    <div>
      <MyContext.Consumer>
        {(values) => {
          return <h1>Value is:{values}</h1>;
        }}
      </MyContext.Consumer>
    </div>
  );
}
