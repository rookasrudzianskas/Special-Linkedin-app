import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBk04HzzYxmUh0S6SN8jxP_AI5lhONTjdQ",
    authDomain: "rookas-linkedin-app.firebaseapp.com",
    projectId: "rookas-linkedin-app",
    storageBucket: "rookas-linkedin-app.appspot.com",
    messagingSenderId: "72021753411",
    appId: "1:72021753411:web:410e302207e736e3c51ef6",
    measurementId: "G-XDLV3R4T7J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;
