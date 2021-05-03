import React, { useState, useEffect } from "react";

export default function UseEffectPerson() {
  const [name, setName] = useState({ firstName: "", surName: "" });

  useEffect(() => {
    setName({
      firstName: "madhu",
      surName: "Gowda",
    });
  }, []);

  return (
    <div>
      <h2>{name.firstName}</h2>
      <h2>{name.surName}</h2>
    </div>
  );
}
