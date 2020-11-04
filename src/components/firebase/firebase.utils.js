import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCUsaEWZSP2JIJJiVzHeXfLvIIsGVBf1nc",
    authDomain: "crwn-db-f96d8.firebaseapp.com",
    databaseURL: "https://crwn-db-f96d8.firebaseio.com",
    projectId: "crwn-db-f96d8",
    storageBucket: "crwn-db-f96d8.appspot.com",
    messagingSenderId: "28005803217",
    appId: "1:28005803217:web:6949f28fb7df76a3b711f0",
    measurementId: "G-LWL71BYTQF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export {firebase};