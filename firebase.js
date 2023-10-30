import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC_wZEJJF7kOdQbZB9YEVmijaAszpuOyh0",
  authDomain: "doppitravel-c402b.firebaseapp.com",
  projectId: "doppitravel-c402b",
  storageBucket: "doppitravel-c402b.appspot.com",
  messagingSenderId: "956030020178",
  appId: "1:956030020178:web:f8499a15076560c95e0d8b",
  measurementId: "G-0XJND6N1HL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
