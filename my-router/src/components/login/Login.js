import React from "react";
//for Redireacting
import { Redirect, useParams } from "react-router-dom";

//destructuring of parameter
//{match:{params:{name}}}
//useing props directly pass props as parameter
export default function Login() {
  // useing router hook useParams() : no need to destructure
  const { name } = useParams();
  return (
    <div>
      {/*Redirecting another Page */}
      {/*{name !== "MadhuGowda" ? <Redirect to="/" /> : null}*/}

      {/* this is useing props as parameter */}
      {/*<h1>this is login page:{props.match.params.name}</h1>*/}
      {/*destructuring of parameter*/}
      <h1>this is login page:{name}</h1>
    </div>
  );
}
