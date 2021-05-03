import React, { useState } from "react";

export default function UseStateArray() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItems}>Click</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}
