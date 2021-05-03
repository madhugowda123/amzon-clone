import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import AddTrip from "../reactRouter/addtrip/AddTrip";
import MyTrips from "../reactRouter/mytrips/MyTrips";
import Packages from "../reactRouter/packages/Packages";

export default function Navbar2() {
  const history = useHistory();
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/mytrips">
            MyTrips
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/packages">
                  Packages <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addtrips">
                  AddTrip
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <button
                    className="btn btn-info"
                    onClick={() => history.push("/")}
                  >
                    LogOut
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/mytrips" component={MyTrips} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/addtrips" component={AddTrip} />
        </Switch>
      </div>
    </Router>
  );
}
