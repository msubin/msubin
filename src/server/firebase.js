import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyB1ikzejNAIWReUOc146wd0_P1l3MB5_6Y",
    authDomain: "portfolio-ba2a2.firebaseapp.com",
    databaseURL: "https://portfolio-ba2a2-default-rtdb.firebaseio.com",
    projectId: "portfolio-ba2a2",
    storageBucket: "portfolio-ba2a2.appspot.com",
    messagingSenderId: "776708970795",
    appId: "1:776708970795:web:a7795ab49b17fc46bdcd6e",
    measurementId: "G-W4FMDMJ8X3"
})

var db = firebaseApp.firestore();

export { db };