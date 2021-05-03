import React from "react";
import { useHistory } from "react-router-dom";

//Navigating programiticaly
//history object as a props {history} as a destructuring
export default function Contact() {
  //useing useHistory() Router Hook
  const history = useHistory();
  return (
    <div>
      this is contact page
      <button onClick={() => history.push("/")}>Go to Home Page</button>
    </div>
  );
}
