import React, { useState, useEffect } from "react";

export default function Check() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert("checked:${checked.toString()}");
  });

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "box checked" : "box Not Checked"}
    </div>
  );
}
