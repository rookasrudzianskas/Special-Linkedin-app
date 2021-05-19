import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";

// this creates a data layer to store all the things, we are accessing this data layer
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
