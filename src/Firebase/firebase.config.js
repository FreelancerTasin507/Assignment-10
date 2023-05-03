// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_-oW7mBDp5d91yFlV9wFUBuJd4hJjRhI",
  authDomain: "chefs-recipes-hunter.firebaseapp.com",
  projectId: "chefs-recipes-hunter",
  storageBucket: "chefs-recipes-hunter.appspot.com",
  messagingSenderId: "836537359365",
  appId: "1:836537359365:web:26427f27e0a0a8ae0a906c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
