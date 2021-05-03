import React, { useState } from "react";

export default function UseStateObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="first Name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="last Name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h2>FIRSTNAME:{name.firstName}</h2>
      <h2>LASTNAME:{name.lastName}</h2>

      {/*In useState there is no merging & Updatin */}
      {/*In seState there is a merging & in useState there is no merging */}

      {/*to see or dispaly the object we use JSON.stringify() */}
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
