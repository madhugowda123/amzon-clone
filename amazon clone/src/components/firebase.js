import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJwFr35qaNPomou31jvKN2DnR14FuAARc",
  authDomain: "clone-2357a.firebaseapp.com",
  projectId: "clone-2357a",
  storageBucket: "clone-2357a.appspot.com",
  messagingSenderId: "890836656193",
  appId: "1:890836656193:web:4cf5546a7f0523b79aa6c0",
  measurementId: "G-GQC1YNMRD1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
