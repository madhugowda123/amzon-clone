import React from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  return (
    <div className="card card-body col-md-4 offset-4 mt-4">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" />

          <label>Email:</label>
          <input type="email" className="form-control" />

          <label>Phone No:</label>
          <input type="number" className="form-control" />

          <label>Gender:</label>

          <label>Male</label>
          <input type="radio" className="form-control" />
          <label>Female</label>
          <input type="radio" className="form-control" />
          <label>Others</label>
          <input type="radio" className="form-control" />

          <label>Address:</label>
          <input type="text" className="form-control" />
          <br />
          <button
            className="btn btn-info"
            onClick={() => history.push("/login")}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
