import { combineReducers } from "redux";
import userReducer from './userReducer';

// this is main reducers file, where all the reducers are registered,
// so this defines the state, where to store all the data of the user, according to that reducer, which is connected to the following state
//in this case, userState is for the user, with userReducer from userReducer and that is all.
const rootReducer = combineReducers({
    userState: userReducer,
});

// exporting the reducers
export default rootReducer;
