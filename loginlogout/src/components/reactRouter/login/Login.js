import React from "react";
import { useHistory } from "react-router-dom";
import Navbar2 from "../../navbars/Navbar2";

export default function Login(props) {
  const history = useHistory();

  return (
    <div>
      <div
        class="card"
        style={{ width: 500, align: "center", marginLeft: 400 }}
      >
        <div class="card-body">
          <h1 className="text-info">LOGIN FORM</h1>
          <p></p>
          <div>
            <input type="text" placeholder="Enter UserName" />
          </div>
          <p></p>
          <div>
            <input type="number" placeholder="Enter Password" />
          </div>
          <p></p>
          <button className="btn btn-info" onClick={() => history.push("/")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
