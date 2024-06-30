// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq2_fBh6xpsQ3CZ7QEOiRij9F7-65K3BQ",
  authDomain: "react-firebase-1cda9.firebaseapp.com",
  projectId: "react-firebase-1cda9",
  storageBucket: "react-firebase-1cda9.appspot.com",
  messagingSenderId: "467673635557",
  appId: "1:467673635557:web:f3ad2c76f6776133cb520c",
  measurementId: "G-BVZLLHSSNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };