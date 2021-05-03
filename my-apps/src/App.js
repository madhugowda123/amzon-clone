//import "./App.css";
// import styles from "./components/reactStyling/appStyle.Module.css";
// import "./components/reactStyling/appStyle.css";

//import Unmounting from "./components/lifecycle/unmounting/Unmounting";
// import Mounting from "./components/lifecycle/mounting/Mounting";
// import ReactSnapUpdate from "./components/lifecycle/updating/ReactSnapUpdate";
// import ReactUpdate from "./components/lifecycle/updating/ReactUpdate";
//import SnapUpdate from "./components/lifecycle/updating/SnapUpdate";
// import InLine from "./components/reactStyling/InLine";
import Form from "./components/forms/Form";
import RadiumStyling from "./components/reactStyling/RadiumStyling";
//import StyleSheet from "./components/reactStyling/StyleSheet";
// import NumbersList from "./components/list&keys/NumbersList";
// import ProductsList from "./components/list&keys/ProductsList";
// import PersonList from "./components/list&keys/PersonList";
// import Vacation from "./components/fragments/FragmentDemo";
// import NumbersList from "./components/list&keys/NumbersList";
// import Trip from "./components/classComponents/ClassDestructure";
// import Poet from "./components/functionalComponents/FunDestructure";
// import Company from "./components/reactEvents/Company";

// import LoginandLogout from "./components/states/Login & Logout";
// import Managers from "./components/states/Managers";
// import Managers from "./components/states/Managers";
// import Counter from "./components/states/Counter";
// import List from "./components/classComponents/IngredientsList";
// import Garage from "./components/classComponents/Parking";
// import Messages from "./components/states/Messages";
// import School from "./components/classComponents/School";
// import Greeting from "./components/classComponents/Greeting";
//import Employee from "./components/functionalComponents/Employee";
//import Welcome from "./components/functionalComponents/Welcome";
//import jsxElement from "./components/jsxconcepts/Jsxconcepts";
//import Employee from "./components/jsxconcepts/Jsxconcepts";
// const numbers = [1, 2, 3, 4, 4, 5];
function App() {
  return (
    <div className="App">
      {/*useing a appStyle.css file its globally scoped & can be called in any files */}
      {/* <h1 className="error">im normal css</h1>*/}

      {/*useingg a appStyle.module.css file its locally scoped */}
      {/* <h2 className={styles.success}>module css</h2>*/}
      {/*<RadiumStyling />*/}
      <Form />
      {/*useing static getDerivedStateFromProps() in mounting */}
      {/*<Mounting favSubject="JavaScript" />*/}
      {/*<Mounting />*/}
      {/*<ReactUpdate />*/}
      {/*<SnapUpdate />*/}
      {/*<Unmounting />*/}
      {/*useing regular Styling */}
      {/*<StyleSheet primarys={false} />*/}
      {/*<InLine />*/}
    </div>
  );
}
export default App;
