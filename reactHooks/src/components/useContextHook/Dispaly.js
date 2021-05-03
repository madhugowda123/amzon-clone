import React, { useContext } from "react";

const MyContext = React.createContext();

export default function Dispaly() {
  return (
    <div>
      <MyContext.Provider value={50}>
        <Sample />
      </MyContext.Provider>
    </div>
  );
}
function Sample() {
  const values = useContext(MyContext);
  return (
    <div>
      <h2>{values}</h2>
    </div>
  );
}
