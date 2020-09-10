import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAndp9BBtbw9JTy190vWbodJ1CzrHt2P-w",
    authDomain: "rod-15d86.firebaseapp.com",
    databaseURL: "https://rod-15d86.firebaseio.com",
    projectId: "rod-15d86",
    storageBucket: "rod-15d86.appspot.com",
    messagingSenderId: "358582043982",
    appId: "1:358582043982:web:c727c1b5fe842f92930a1f",
    measurementId: "G-7KQSP1SL7R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {
    db,
    auth
};