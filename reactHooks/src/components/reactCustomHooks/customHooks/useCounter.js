import React, { useState } from "react";

export default function useCounter(value) {
  const [count, setCount] = useState(value);

  const increment = (inc) => {
    setCount(count + inc);
  };
  const decrement = (dec) => {
    setCount(count - dec);
  };
  const reset = (res) => {
    setCount(res);
  };
  return [count, increment, decrement, reset];
}
