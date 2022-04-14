import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBiohm6awhDylXjL6sn7eviYhl809HjMK4",
    authDomain: "auth-83772.firebaseapp.com",
    projectId: "auth-83772",
    storageBucket: "auth-83772.appspot.com",
    messagingSenderId: "78764053425",
    appId: "1:78764053425:web:be3414a2cde3cf8395e390",
    measurementId: "G-QTWXKQRQ0H"
  };

  // Initialize Firebase
  //the conecting between firebase and the react project
const app = initializeApp(firebaseConfig);
  
  // Initialize auth
  //also need to import, so i can use anywhere in the project
export const auth = getAuth(app);