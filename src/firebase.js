import { GoogleAuthProvider } from "firebase/auth";
// import firebase from 'firebase';

// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm-b-xMf7xOmupnJw249xfSrR5DWTAchY",
    authDomain: "movieplus-fbf62.firebaseapp.com",
    projectId: "movieplus-fbf62",
    storageBucket: "movieplus-fbf62.appspot.com",
    messagingSenderId: "973148875508",
    appId: "1:973148875508:web:d2b45e15a2708be84ecca1"
  };

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
// export default db;