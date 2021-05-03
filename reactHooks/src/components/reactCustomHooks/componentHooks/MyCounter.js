import React, { useState } from "react";
import useCounter from "../customHooks/useCounter";

export default function MyCounter() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          increment(20);
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          decrement(20);
        }}
      >
        DECREMENT
      </button>
      <button
        onClick={() => {
          reset(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}
