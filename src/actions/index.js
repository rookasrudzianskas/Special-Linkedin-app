import {auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    // setting the user to dispatching to the store
  type: "SET_USER",
  user: payload,
})

// logins the user to the google
export function signInAPI() {
    return(dispatch) => {
        // then it logins, it gets the object, which we call payload, and we pass to the forward, and log on the screen
        auth.signInWithPopup(provider).then(payload => {
            // dispatching an action to the dat layer, the setUser sets everything, all the data goes in here
            dispatch(setUser(payload.user))
        }).catch(error => alert(error));
    };
}
