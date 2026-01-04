// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJuu9rdzrZKpSxPZNfN7geZPLj78PWGcE",
  authDomain: "react-auth-firebase-eb9b9.firebaseapp.com",
  projectId: "react-auth-firebase-eb9b9",
  storageBucket: "react-auth-firebase-eb9b9.firebasestorage.app",
  messagingSenderId: "401936563072",
  appId: "1:401936563072:web:eb52d9dfee871f692d1f65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
