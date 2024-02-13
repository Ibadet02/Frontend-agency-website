// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3jo8GOU5Ie-U0nxSIm2yTvFMSyNUpZpk",
  authDomain: "devro-607ff.firebaseapp.com",
  projectId: "devro-607ff",
  storageBucket: "devro-607ff.appspot.com",
  messagingSenderId: "316879452723",
  appId: "1:316879452723:web:1a6c1906968d6970964146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
