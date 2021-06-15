import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA7cb5TEfPvG0XiDWUxoOtvC9adJ-KFMqo",
    authDomain: "twitter-clone-6056f.firebaseapp.com",
    projectId: "twitter-clone-6056f",
    storageBucket: "twitter-clone-6056f.appspot.com",
    messagingSenderId: "96615856198",
    appId: "1:96615856198:web:891497cd49bf3c1b9b3247",
    measurementId: "G-EM7SSN6VBF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;