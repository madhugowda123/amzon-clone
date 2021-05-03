import "./App.css";
import UseContextHooks from "./components/useContextHook/UseContextHooks";
//import UseEffectArray from "./components/useEffect/UseEffectArray";
import Display from "./components/useContextHook/Dispaly";

// import Name from "./components/useStateHook/Name";
// import Year from "./components/useStateHook/Year";
// import Check from "./components/useEffect/Check";
//import UseEffectPerson from "./components/useEffect/UseEffectPerson";
//import Reducer from "./components/useReducer/Reducer";
//import MyCounter from "./components/reactCustomHooks/componentHooks/MyCounter";
//import ErrorBoundary from "./components/errorBoundry/ErrorBoundary";
//import Hero from "./components/errorBoundry/Hero";
import PersonList from "./components/axios/PersonList";
import PersonInput from "./components/axios/PersonInput";
import PersonList1 from "./components/axios/PersonList1";
import PersonInputDelete from "./components/axios/PersonInputDelete";
import FetchUser from "./components/axios/fetchAPI/FetchUser";
import MyRefs from "./components/refs/MyRefs";
import RandomUsers from "./components/hoc/Hoc";
// import UseStateObject from "./components/useStateHook/UseStateObject";
//import UseStateArray from "./components/useStateHook/UseStateArray";

function App() {
  return (
    <div className="App">
      <RandomUsers />
      {/*<MyRefs />*/}
      {/*<FetchUser />*/}
      {/*<PersonInputDelete />*/}
      {/*<PersonList1 />*/}
      {/*<PersonInput />*/}
      {/*<PersonList />*/}
      {/*<ErrorBoundary>
        <Hero heroName="madhu" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="jocker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="darshan" />
      </ErrorBoundary>
      {/*<UseContextHooks />*/}
      {/*<Display />
       */}
      {/*<MyCounter />*/}
      {/*<Reducer />*/}
      {/*<UseEffectArray />*/}
      {/*<UseEffectPerson />*/}
      {/*<Check />*/}
      {/*<Name />*/}
      {/*<Year />*/}
      {/*<UseStateObject />
      <UseStateArray />*/}
    </div>
  );
}

export default App;
