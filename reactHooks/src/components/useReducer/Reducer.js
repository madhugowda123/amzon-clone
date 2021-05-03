import React, { useReducer } from "react";

export default function Reducer() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? " box Checked" : "box Unchecked"}
    </div>
  );
}
