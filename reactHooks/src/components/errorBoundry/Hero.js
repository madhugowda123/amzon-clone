import React from "react";

export default function Hero({ heroName }) {
  if (heroName === "jocker") throw new Error("ypu are not a Hero");
  return (
    <div>
      <h2>{heroName}</h2>
    </div>
  );
}
