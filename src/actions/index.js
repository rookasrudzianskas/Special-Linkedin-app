import {auth, provider } from "../firebase";


// logins the user to the google
export function signInAPI() {
    return(dispatch) => {
        auth.signInWithPopup(provider).then(payload => {
            console.log(payload);
        }).catch(error => alert(error));
    };
}
