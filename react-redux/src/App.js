import "./App.css";
import { Provider } from "react-redux";
//import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components1/IcecreamContainer";
import store from "./redux1/store1";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
