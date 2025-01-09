// lib/firebase.js
import { initializeApp } from "firebase/app";
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
const auth = getAuth(app);

export { auth };
