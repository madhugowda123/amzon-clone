import React, { useState } from "react";

export default function Year() {
  // how to count a value
  const [year, setYear] = useState(2020);
  return (
    <div>
      <h2>{year}</h2>
      <button onClick={() => setYear(year + 1)}>Click</button>
    </div>
  );
}
