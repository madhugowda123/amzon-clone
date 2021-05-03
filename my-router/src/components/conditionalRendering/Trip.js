import React from "react";

function Lake({ name }) {
  return <h2>Visit {name}</h2>;
}   

function SkiResort({ name }) {
  return <h2>Visit {name}</h2>;
}

export default function Trip(props) {
  if (props.season === "summer") {
    return <Lake name="Summer Lake" />;
  } else {
    return <SkiResort name="Winter Resort" />;
  }
}
