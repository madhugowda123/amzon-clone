import React, { useState } from "react";

export default function Name() {
  // we can also call multiple state value
  const [name, setName] = useState("Madhu");
  const [year, setYear] = useState(2020);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("Gowda")}>Click</button>

      <h2>{year}</h2>
      <button onClick={() => setYear(year + 1)}>Click</button>
    </div>
  );
}
