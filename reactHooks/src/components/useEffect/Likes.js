import React, { useState, useEffect } from "react";

export default function Likes() {
  cinst[(Likes, setLikes)] = useState(0);

  //  useing  useEffect()
  useEffect(() => {
    document.title = `You got ${likes} Likes!!!`;
  });

  return (
    <div>
      <h2>Your Likes Are{likes}</h2>
      <button onClick={() => setLikes(likes + 1)}>Click</button>
    </div>
  );
}
