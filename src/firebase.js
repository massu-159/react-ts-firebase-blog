// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqcwgUQGlTLVZBh3AYKvRgOFiTj2TevpM",
  authDomain: "blog-m-2d1ce.firebaseapp.com",
  projectId: "blog-m-2d1ce",
  storageBucket: "blog-m-2d1ce.appspot.com",
  messagingSenderId: "115879175647",
  appId: "1:115879175647:web:1486ab2c6882634b89106a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };