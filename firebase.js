// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYDgJAF8b0KH28R26SE1vnm4OJjYLYLYY",
  authDomain: "itts-mart.firebaseapp.com",
  projectId: "itts-mart",
  storageBucket: "itts-mart.appspot.com",
  messagingSenderId: "593486599501",
  appId: "1:593486599501:web:1ab3307f1c14b457051304",
  measurementId: "G-DNN9KRMXN5",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
