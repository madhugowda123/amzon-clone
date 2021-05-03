import { createStore } from "redux";
import icecreamReducer from "./icecreamshop/IcecreamReducer";

const store = createStore(icecreamReducer);

export default store;
