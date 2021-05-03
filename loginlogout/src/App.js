import "./App.css";
// import Dropdown from "./components/functionalComponents/Dropdown";
//import Company from "./components/functionalComponents/Dropdown";
//import Dropdowns from "./components/functionalComponents/Dropdown";
// import MyShows from "./components/functionalComponents/MyShows";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

import About from "./components/reactRouter/about/About";
import Gallary from "./components/reactRouter/gallary/Gallary";
import Login from "./components/reactRouter/login/Login";
import Register from "./components/reactRouter/register/Register";
import MyTrip from "./components/reactRouter/mytrip/MyTrip";
import Packages from "./components/reactRouter/packages/Packages";
import AddTrip from "./components/reactRouter/addtrip/AddTrip";
import Headers from "./components/reactRouter/headers/Headers";
import Calculator from "./components/caluculatorApp/Calculator";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Headers />
    </div>
  );
}

export default App;
