import React from "react";

function Lake() {
  return <h1>Summer Lake</h1>;
}

function Resort() {
  return <h1>Winter Resort</h1>;
}

export default function Vacation() {
  return (
    //useing React Fragments<></>
    <>
      <Lake />
      <Resort />
    </>
  );
}
