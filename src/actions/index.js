import {auth, provider } from "../firebase";


// logins the user to the google
export function signInAPI() {
    return(dispatch) => {
        // then it logins, it gets the object, which we call payload, and we pass to the forward, and log on the screen
        auth.signInWithPopup(provider).then(payload => {
            console.log(payload);
        }).catch(error => alert(error));
    };
}
