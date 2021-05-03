import "./App.css";
import NewResort from "./components/contextAPI/allContextAPI/ContextAPI";
import ResortState from "./components/contextAPI/allContextAPI/ContextState";
import Resort from "./components/contextAPI/allContextAPI/PropsDrilling";
import ComponentC from "./components/contextAPI/contextComponent/ComponentC";
import { UserProvider } from "./components/contextAPI/contextComponent/useContext";

function App() {
  return (
    <div className="App">
      {/*single page Props Drilling 
      <Resort />*/}
      <ResortState />

      {/*multiple component context
      <UserProvider value="Madhu">
        <ComponentC />
    </UserProvider>*/}
      {/* for default value only use Component file no need to give provider 
      <ComponentC />*/}
    </div>
  );
}
export default App;
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import Home from "./components/home/Home";
// import Contact from "./components/contact/Contact";
// import Login from "./components/login/Login";
// import Trip from "./components/conditionalRendering/Trip";
// import ParentComponent from "./components/pureComponents/ParentComponent";

// //passing router parameter
//   const name = "MadhuGowda";

//   //Guarding Routes
//   const isAuthenticated = true;

//   return (
//     <Router>
//       <div className="App">
//         <ParentComponent />
//         {/* <Trip season="winter" />*/}
//         {/*<ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//   </ul>*/}

//         {/*Useing Bootstrap Navbar */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <Link className="navbar-brand" to="/">
//             MyTrips
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/">
//                   Home <span className="sr-only">(current)</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={`/login/${name}`}>
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <Switch>
//           <Route exact path="/" component={Home} />
//           {/*Guarding Routers */}
//           {isAuthenticated ? (
//             <div>
//               <Route exact path="/contact" component={Contact} />
//               <Route exact path="/login/:name" component={Login} />
//             </div>
//           ) : (
//             <Redirect to="/" />
//           )}
//         </Switch>
//       </div>
//     </Router>
//   );
