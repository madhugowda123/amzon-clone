import React, { useState, useEffect } from "react";

export default function UseEffectArray() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  useEffect(() => {
    console.log(`first phrase:${val}`);
  }, [val]);
  useEffect(() => {
    console.log(`first phrase:${val2}`);
  }, [val2]);

  return (
    <div>
      <input type="text" value={val} onCgange={(e) => setVal(e.target.value)} />
      <input
        type="text"
        value={val2}
        onCgange={(e) => setVal2(e.target.value)}
      />
    </div>
  );
}
