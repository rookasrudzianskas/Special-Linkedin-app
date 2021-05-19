import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

// this creates a data layer to store all the things, we are accessing this data layer
const store = createStore(rootReducer, {});

export default store;
