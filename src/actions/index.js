import {auth, provider, storage } from "../firebase";
import { SET_USER, SET_LOADING_STATUS } from "./actionType";
import db from "../firebase";

import firebase from "firebase";
import {logDOM} from "@testing-library/react";

export const setUser = (payload) => ({
    // setting the user to dispatching to the store
  type: "SET_USER",
  user: payload,
});

export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status,
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


export function getUserAuth() {
    // if the user state changes, we go and set the user for the new info
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUser(user))
            }
        })
    }
}

export function signOutAPI() {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        }).catch(error => alert(error))
    }
}

export function postArticleAPI(payload) {
    return(dispatch) => {
        dispatch(setLoading(true));
        if(payload.image !== '') {
            const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);

            upload.on('state_changed', snapshot => {
                const progress = (
                    snapshot.bytesTransferred / snapshot.totalBytes * 100);

            console.log(`progress: ${progress}%`);
            if (snapshot.state === "RUNNING") {
                console.log(`progress: ${progress}%`);

            }
            }, error => console.log(error.code), async () => { const downloadURL = await upload.snapshot.ref.getDownloadURL();
                db.collection('articles').add({
                    actor: {
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.user.photoURL,
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    description: payload.description,
                });
                dispatch(setLoading(false));
            }
            );
        } else if(payload.video) {
            db.collection('articles').add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description,
            });
            dispatch(setLoading(false));
        }
    };
}


export function getArticleAPI() {
    return(dispatch) => {
        let payload;

        db.collection('articles').orderBy('actor.date', 'desc').onSnapshot(snapshot => {
            payload = snapshot.docs.map(doc => doc.data());
            console.log(payload);
        });
    }
}


























