// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKIdtNi8b4go6IgFFEoduqzzP6mJCdYlk", // Replace with your actual Firebase Web API key
  authDomain: "hackathon-management-sys-da370.firebaseapp.com",
  projectId: "hackathon-management-sys-da370",
  storageBucket: "hackathon-management-sys-da370.appspot.com",
  messagingSenderId: "560589543386",
  appId: "1:560589543386:web:abcd1234", // Replace with your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firestore and Authentication instances
export { db, auth };